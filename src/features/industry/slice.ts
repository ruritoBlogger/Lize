import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as A from 'fp-ts/Array'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as t from 'io-ts'

import { EqIndustry, Industry, IndustryCodec } from '../../domains'
import { runGetHttpRequest } from '../../functions/HttpRequest'
import type { State } from './State'

export const fetchIndustryList = createAsyncThunk<Industry[]>(
  'industry/getList',
  async () =>
    await runGetHttpRequest(
      // NOTE: io-ts-typesを使ったcodecを流そうとすると弾かれるんよな
      // eslint-disable-next-line
      // @ts-ignore
      t.array(IndustryCodec),
      'http://localhost:3000/industry',
    )().then((value) =>
      // NOTE: fp-ts/TaskEither -> Promise
      // createAsyncThunk内部でresolve, rejectしないと効力があまりない
      pipe(
        value,
        E.map((value) => Promise.resolve(value)),
        E.getOrElse((e) => Promise.reject(e)),
      ),
    ),
)

export const industrySlice = createSlice({
  name: 'industry',
  initialState: {
    industries: [],
    isLoading: false,
    error: O.none,
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIndustryList.fulfilled, (state, action) => {
      return {
        ...state,
        error: O.none,
        isLoading: false,
        industries: [...A.union(EqIndustry)(state.industries)(action.payload)],
      }
    })
    builder.addCase(fetchIndustryList.rejected, (state, action) => {
      return {
        ...state,
        error: O.some(action.error),
        isLoading: false,
      }
    })
    builder.addCase(fetchIndustryList.pending, (state, _) => {
      return {
        ...state,
        isLoading: true,
      }
    })
  },
})
