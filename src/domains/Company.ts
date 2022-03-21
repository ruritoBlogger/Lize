import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const CompanyCodec = t.type({
  name: t.string,
  id: t.number,
  industryID: t.number,
  identificationCode: t.number,
  createdAt: tt.date,
  updatedAt: tt.date,
})

export type Company = t.TypeOf<typeof CompanyCodec>
