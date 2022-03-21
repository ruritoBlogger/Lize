import * as t from 'io-ts'

export const CashFlowCodec = t.type({
  financialID: t.number,
  id: t.number,
  salesCF: t.number,
  investmentCF: t.number,
  financialCF: t.number,
  createdAt: t.string,
  updatedAt: t.string,
})

export type CashFlow = t.TypeOf<typeof CashFlowCodec>
