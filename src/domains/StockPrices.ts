import * as t from 'io-ts'

export const StockPriceCodec = t.type({
  IDcompany: t.number,
  id: t.number,
  OpeningPrice: t.number,
  ClosingPrice: t.number,
  HighPrice: t.number,
  LowPrice: t.number,
  Date: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type StockPrice = t.TypeOf<typeof StockPriceCodec>
