import * as t from 'io-ts'

export const BalanceSheetCodec = t.type({
  IDfinancial: t.number,
  id: t.number,
  TotalAssets: t.number,
  NetAssets: t.number,
  CapitalStock: t.number,
  ProfitSurplus: t.number,
  CashEquivalent: t.number,
  NetCash: t.number,
  Depreciation: t.number,
  CapitalInvestment: t.number,
  Liabilities: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type BalanceSheet = t.TypeOf<typeof BalanceSheetCodec>
