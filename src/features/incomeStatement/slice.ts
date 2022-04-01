import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as A from 'fp-ts/Array'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as t from 'io-ts'

import {
  EqIncomeStatement,
  IncomeStatement,
  IncomeStatementCodec,
} from '../../domains'
import { runGetHttpRequest } from '../../functions/HttpRequest'
import type { State } from './State'

const TOKO_URL = process.env.NEXT_PUBLIC_TOKO_URL
const TOKO_PORT = process.env.NEXT_PUBLIC_TOKO_PORT

export const fetchIncomeStatementList = createAsyncThunk<
  IncomeStatement[],
  { companyID: number; financialID: number }
>(
  'incomeStatement/getList',
  async ({ companyID, financialID }) =>
    await runGetHttpRequest(
      // NOTE: io-ts-typesを使ったcodecを流そうとすると弾かれるんよな
      // eslint-disable-next-line
      // @ts-ignore
      t.array(IncomeStatementCodec),
      `${TOKO_URL}:${TOKO_PORT}/company/${companyID}/finantial/${financialID}/income`,
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

export const incomeStatementSlice = createSlice({
  name: 'incomeStatement',
  initialState: {
    incomeStatements: {},
    isLoading: false,
    error: O.none,
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIncomeStatementList.fulfilled, (state, action) => {
      return {
        ...state,
        error: O.none,
        isLoading: false,
        incomeStatements: {
          ...state.incomeStatements,
          /**
           * NOTE: 既に財務諸表データが存在するキーに対して情報を追加する
           * state <- [financialID]: [IncomeStatement1, IncomeStatement2, IncomeStatement3]
           * action.payload <- [IncomeStatement2, IncomeStatement4]
           * result <- [financialID]: [IncomeStatement1, IncomeStatement2, IncomeStatement3, IncomeStatement4]
           */
          [action.payload[0].financialID]: [
            ...A.union(EqIncomeStatement)(
              state.incomeStatements[action.payload[0].financialID],
            )(action.payload),
          ],
        },
      }
    })
    builder.addCase(fetchIncomeStatementList.rejected, (state, action) => {
      return {
        ...state,
        error: O.some(action.error),
        isLoading: false,
      }
    })
    builder.addCase(fetchIncomeStatementList.pending, (state, _) => {
      return {
        ...state,
        isLoading: true,
      }
    })
  },
})
