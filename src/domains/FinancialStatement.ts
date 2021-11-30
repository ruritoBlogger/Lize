import * as t from 'io-ts'

export const FinancialStatementCodec = t.type({
  companyID: t.number,
  announcementDate: t.number,
  isFiscal: t.boolean,
  createdAt: t.number,
  updatedAt: t.number,
})

export type FinancialStatement = t.TypeOf<typeof FinancialStatementCodec>
