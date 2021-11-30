import * as t from 'io-ts'

export const BalanceSheetCodec = t.type({
  financialID: t.number,
  totalAssets: t.number,
  netAssets: t.number,
  capitalStock: t.number,
  profitSurplus: t.number,
  cashEquivalent: t.number,
  netCash: t.number,
  depreciation: t.number,
  capitalInvestment: t.number,
  liabilities: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type BalanceSheet = t.TypeOf<typeof BalanceSheetCodec>
