import * as Eq from 'fp-ts/Eq'
import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const CashFlowCodec = t.type({
  financialID: t.number,
  id: t.number,
  salesCF: t.number,
  investmentCF: t.number,
  financialCF: t.number,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type CashFlow = t.TypeOf<typeof CashFlowCodec>

export const EqCashFlow: Eq.Eq<CashFlow> = {
  equals: (p1, p2) => p1.financialCF === p2.financialID && p1.id === p2.id,
}
