import * as t from 'io-ts'

export const IncomeStatementCodec = t.type({
  financialID: t.number,
  totalSales: t.number,
  operatingIncome: t.number,
  ordinaryIncome: t.number,
  netIncome: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type IncomeStatement = t.TypeOf<typeof IncomeStatementCodec>
