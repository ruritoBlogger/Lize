import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as A from 'fp-ts/Array'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as t from 'io-ts'

import {
  EqFinancialStatement,
  FinancialStatement,
  FinancialStatementCodec,
} from '../../domains'
import { runGetHttpRequest } from '../../functions/HttpRequest'
import type { State } from './State'

const TOKO_URL = process.env.NEXT_PUBLIC_TOKO_URL
const TOKO_PORT = process.env.NEXT_PUBLIC_TOKO_PORT

export const fetchFinancialStatementList = createAsyncThunk<
  FinancialStatement[],
  number
>(
  'financialStatement/getList',
  async (companyID) =>
    await runGetHttpRequest(
      // NOTE: io-ts-typesを使ったcodecを流そうとすると弾かれるんよな
      // eslint-disable-next-line
      // @ts-ignore
      t.array(FinancialStatementCodec),
      `http://${TOKO_URL}:${TOKO_PORT}/company/${companyID}/finantial`,
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

export const financialStatementSlice = createSlice({
  name: 'financialStatement',
  initialState: {
    financialStatements: {},
    isLoading: false,
    error: O.none,
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFinancialStatementList.fulfilled, (state, action) => {
      return {
        ...state,
        error: O.none,
        isLoading: false,
        financialStatements: {
          ...state.financialStatements,
          /**
           * NOTE: 既に財務諸表データが存在するキーに対して情報を追加する
           * state <- [companyID]: [FinancialStatement1, FinancialStatement2, FinancialStatement3]
           * action.payload <- [FinancialStatement2, FinancialStatement4]
           * result <- [companyID]: [FinancialStatement1, FinancialStatement2, FinancialStatement3, FinancialStatement4]
           */
          [action.payload[0].companyID]: [
            ...A.union(EqFinancialStatement)(
              state.financialStatements[action.payload[0].companyID],
            )(action.payload),
          ],
        },
      }
    })
    builder.addCase(fetchFinancialStatementList.rejected, (state, action) => {
      return {
        ...state,
        error: O.some(action.error),
        isLoading: false,
      }
    })
    builder.addCase(fetchFinancialStatementList.pending, (state, _) => {
      return {
        ...state,
        isLoading: true,
      }
    })
  },
})
