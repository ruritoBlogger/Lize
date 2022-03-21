import * as t from 'io-ts'

export const BalanceSheetCodec = t.type({
  financialID: t.number,
  id: t.number,
  totalAssets: t.number,
  netAssets: t.number,
  capitalStock: t.number,
  profitSurplus: t.number,
  cashEquivalent: t.number,
  printedNum: t.number,
  createdAt: t.string,
  updatedAt: t.string,
})

export type BalanceSheet = t.TypeOf<typeof BalanceSheetCodec>
