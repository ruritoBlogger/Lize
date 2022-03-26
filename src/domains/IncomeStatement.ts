import * as Eq from 'fp-ts/Eq'
import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const IncomeStatementCodec = t.type({
  financialID: t.number,
  id: t.number,
  totalSales: t.number,
  operatingIncome: t.number,
  ordinaryIncome: t.number,
  netIncome: t.number,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type IncomeStatement = t.TypeOf<typeof IncomeStatementCodec>

export const EqIncomeStatement: Eq.Eq<IncomeStatement> = {
  equals: (p1, p2) => p1.financialID === p2.financialID && p1.id === p2.id,
}
