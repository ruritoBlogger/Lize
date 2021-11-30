import * as t from 'io-ts'

export const StockPriceCodec = t.type({
  companyID: t.number,
  openingPrice: t.number,
  closingPrice: t.number,
  highPrice: t.number,
  lowPrice: t.number,
  date: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type StockPrice = t.TypeOf<typeof StockPriceCodec>
