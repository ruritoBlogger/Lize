import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const FinancialStatementCodec = t.type({
  companyID: t.number,
  id: t.number,
  announcementDate: tt.date,
  isFiscal: t.boolean,
  createdAt: tt.date,
  updatedAt: tt.date,
})

export type FinancialStatement = t.TypeOf<typeof FinancialStatementCodec>
