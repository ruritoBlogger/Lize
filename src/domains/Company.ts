import * as Eq from 'fp-ts/Eq'
import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const CompanyCodec = t.type({
  name: t.string,
  id: t.number,
  industryID: t.number,
  identificationCode: t.number,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type Company = t.TypeOf<typeof CompanyCodec>

export const EqCompany: Eq.Eq<Company> = {
  equals: (p1, p2) =>
    p1.name === p2.name &&
    p1.id === p2.id &&
    p1.identificationCode === p2.identificationCode,
}
