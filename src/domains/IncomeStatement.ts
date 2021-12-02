import * as t from 'io-ts'

export const IncomeStatementCodec = t.type({
  IDfinancial: t.number,
  id: t.number,
  TotalSales: t.number,
  OperatingIncome: t.number,
  OrdinaryIncome: t.number,
  NetIncome: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type IncomeStatement = t.TypeOf<typeof IncomeStatementCodec>
