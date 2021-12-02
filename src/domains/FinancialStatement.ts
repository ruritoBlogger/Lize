import * as t from 'io-ts'

export const FinancialStatementCodec = t.type({
  IDcompany: t.number,
  id: t.number,
  AnnouncementDate: t.number,
  isFiscal: t.boolean,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type FinancialStatement = t.TypeOf<typeof FinancialStatementCodec>
