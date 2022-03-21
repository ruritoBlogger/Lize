import * as t from 'io-ts'

export const FinancialStatementCodec = t.type({
  companyID: t.number,
  id: t.number,
  announcementDate: t.string,
  isFiscal: t.boolean,
  createdAt: t.string,
  updatedAt: t.string,
})

export type FinancialStatement = t.TypeOf<typeof FinancialStatementCodec>
