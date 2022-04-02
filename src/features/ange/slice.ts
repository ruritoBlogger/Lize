import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'

import { AngeResponseCodec } from '../../domains'
import { runGetHttpRequest } from '../../functions/HttpRequest'
import type { State } from './State'

const ANGE_URL = process.env.NEXT_PUBLIC_ANGE_URL
const ANGE_PORT = process.env.NEXT_PUBLIC_ANGE_PORT

export const runGenerateIndustry = createAsyncThunk<{ message: string }>(
  'ange/industry',
  async () =>
    await runGetHttpRequest(
      AngeResponseCodec,
      `http://${ANGE_URL}:${ANGE_PORT}/industry`,
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

export const runGenerateCompany = createAsyncThunk<{ message: string }>(
  'ange/company',
  async () =>
    await runGetHttpRequest(
      AngeResponseCodec,
      `http://${ANGE_URL}:${ANGE_PORT}/company`,
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

export const runGenerateFinancialStatement = createAsyncThunk<{
  message: string
}>(
  'ange/financial',
  async () =>
    await runGetHttpRequest(
      AngeResponseCodec,
      `http://${ANGE_URL}:${ANGE_PORT}/finantial_statements`,
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

export const angeSlice = createSlice({
  name: 'ange',
  initialState: {
    industryRequest: {
      isLoading: false,
      isLoadingSuccess: O.none,
      error: O.none,
    },
    companyRequest: {
      isLoading: false,
      isLoadingSuccess: O.none,
      error: O.none,
    },
    financialStatementRequest: {
      isLoading: false,
      isLoadingSuccess: O.none,
      error: O.none,
    },
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(runGenerateIndustry.fulfilled, (state, _) => {
      return {
        ...state,
        industryRequest: {
          isLoading: false,
          isLoadingSuccess: O.some(true),
          error: O.none,
        },
      }
    })
    builder.addCase(runGenerateIndustry.rejected, (state, action) => {
      return {
        ...state,
        industryRequest: {
          isLoading: false,
          isLoadingSuccess: O.some(false),
          error: O.some(action.error),
        },
      }
    })
    builder.addCase(runGenerateIndustry.pending, (state, _) => {
      return {
        ...state,
        industryRequest: {
          isLoading: true,
          isLoadingSuccess: O.none,
          error: O.none,
        },
      }
    })
    builder.addCase(runGenerateCompany.fulfilled, (state, _) => {
      return {
        ...state,
        companyRequest: {
          isLoading: false,
          isLoadingSuccess: O.some(true),
          error: O.none,
        },
      }
    })
    builder.addCase(runGenerateCompany.rejected, (state, action) => {
      return {
        ...state,
        companyRequest: {
          isLoading: false,
          isLoadingSuccess: O.some(false),
          error: O.some(action.error),
        },
      }
    })
    builder.addCase(runGenerateCompany.pending, (state, _) => {
      return {
        ...state,
        companyRequest: {
          isLoading: true,
          isLoadingSuccess: O.none,
          error: O.none,
        },
      }
    })
    builder.addCase(runGenerateFinancialStatement.fulfilled, (state, _) => {
      return {
        ...state,
        financialStatementRequest: {
          isLoading: false,
          isLoadingSuccess: O.some(true),
          error: O.none,
        },
      }
    })
    builder.addCase(runGenerateFinancialStatement.rejected, (state, action) => {
      return {
        ...state,
        financialStatementRequest: {
          isLoading: false,
          isLoadingSuccess: O.some(false),
          error: O.some(action.error),
        },
      }
    })
    builder.addCase(runGenerateFinancialStatement.pending, (state, _) => {
      return {
        ...state,
        financialStatementRequest: {
          isLoading: true,
          isLoadingSuccess: O.none,
          error: O.none,
        },
      }
    })
  },
})
