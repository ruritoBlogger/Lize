import * as Eq from 'fp-ts/Eq'
import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const StockPriceCodec = t.type({
  companyID: t.number,
  id: t.number,
  openingPrice: t.number,
  closingPrice: t.number,
  highPrice: t.number,
  lowPrice: t.number,
  date: tt.DateFromISOString,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type StockPrice = t.TypeOf<typeof StockPriceCodec>

export const EqStockPrice: Eq.Eq<StockPrice> = {
  equals: (p1, p2) => p1.companyID === p2.companyID && p1.id === p2.id,
}
