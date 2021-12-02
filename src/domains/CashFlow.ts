import * as t from 'io-ts'

export const CashFlowCodec = t.type({
  IDfinancial: t.number,
  id: t.number,
  SalesCF: t.number,
  InvestmentCF: t.number,
  FinancialCF: t.number,
  CashEquivalent: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type CashFlow = t.TypeOf<typeof CashFlowCodec>
