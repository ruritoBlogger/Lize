import * as t from 'io-ts'

export const CashFlowCodec = t.type({
  financialID: t.number,
  salesCF: t.number,
  investmentCF: t.number,
  financialCF: t.number,
  cashEquivalent: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type CashFlow = t.TypeOf<typeof CashFlowCodec>
