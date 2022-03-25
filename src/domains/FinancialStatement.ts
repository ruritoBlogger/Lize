import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const FinancialStatementCodec = t.type({
  companyID: t.number,
  id: t.number,
  announcementDate: tt.DateFromISOString,
  isFiscal: t.boolean,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type FinancialStatement = t.TypeOf<typeof FinancialStatementCodec>
