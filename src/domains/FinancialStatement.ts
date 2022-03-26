import * as Eq from 'fp-ts/Eq'
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

export const EqFinancialStatement: Eq.Eq<FinancialStatement> = {
  equals: (p1, p2) =>
    p1.companyID === p2.companyID &&
    p1.id === p2.id &&
    p1.announcementDate === p2.announcementDate,
}
