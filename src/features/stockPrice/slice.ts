import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as A from 'fp-ts/Array'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as t from 'io-ts'

import { EqStockPrice, StockPrice, StockPriceCodec } from '../../domains'
import { runGetHttpRequest } from '../../functions/HttpRequest'
import type { State } from './State'

const TOKO_URL = process.env.NEXT_PUBLIC_TOKO_URL
const TOKO_PORT = process.env.NEXT_PUBLIC_TOKO_PORT

export const fetchStockPriceList = createAsyncThunk<StockPrice[], number>(
  'stockPrice/getList',
  async (companyID) =>
    await runGetHttpRequest(
      // NOTE: io-ts-typesを使ったcodecを流そうとすると弾かれるんよな
      // eslint-disable-next-line
      // @ts-ignore
      t.array(StockPriceCodec),
      `${TOKO_URL}:${TOKO_PORT}/company/${companyID}/stock`,
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

export const stockPriceSlice = createSlice({
  name: 'stockPrice',
  initialState: {
    stockPrices: {},
    isLoading: false,
    error: O.none,
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockPriceList.fulfilled, (state, action) => {
      return {
        ...state,
        error: O.none,
        isLoading: false,
        stockPrices: {
          ...state.stockPrices,
          /**
           * NOTE: 既に株価情報が存在するキーに対して情報を追加する
           * state <- [companyID]: [StockPrice1, StockPrice2, StockPrice3]
           * action.payload <- [StockPrice2, StockPrice4]
           * result <- [companyID]: [StockPrice1, StockPrice2, StockPrice3, StockPrice4]
           */
          [action.payload[0].companyID]: [
            ...A.union(EqStockPrice)(
              state.stockPrices[action.payload[0].companyID],
            )(action.payload),
          ],
        },
      }
    })
    builder.addCase(fetchStockPriceList.rejected, (state, action) => {
      return {
        ...state,
        error: O.some(action.error),
        isLoading: false,
      }
    })
    builder.addCase(fetchStockPriceList.pending, (state, _) => {
      return {
        ...state,
        isLoading: true,
      }
    })
  },
})
