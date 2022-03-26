import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as A from 'fp-ts/Array'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as t from 'io-ts'

import { Company, CompanyCodec, EqCompany } from '../../domains'
import { runGetHttpRequest } from '../../functions/HttpRequest'
import type { State } from './State'

export const fetchCompanyList = createAsyncThunk<Company[]>(
  'company/getList',
  async () =>
    await runGetHttpRequest(
      // NOTE: io-ts-typesを使ったcodecを流そうとすると弾かれるんよな
      // eslint-disable-next-line
      // @ts-ignore
      t.array(CompanyCodec),
      // TODO: APIのurlは環境変数に吐き出しておく
      'http://localhost:3000/company',
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

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: [],
    isLoading: false,
    error: O.none,
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyList.fulfilled, (state, action) => {
      return {
        ...state,
        error: O.none,
        isLoading: false,
        companies: [...A.union(EqCompany)(state.companies)(action.payload)],
      }
    })
    builder.addCase(fetchCompanyList.rejected, (state, action) => {
      return {
        ...state,
        error: O.some(action.error),
        isLoading: false,
      }
    })
    builder.addCase(fetchCompanyList.pending, (state, _) => {
      return {
        ...state,
        isLoading: true,
      }
    })
  },
})
