import * as t from 'io-ts'

export const CompanyCodec = t.type({
  name: t.string,
  id: t.number,
  industryID: t.number,
  identificationCode: t.number,
  createdAt: t.string,
  updatedAt: t.string,
})

export type Company = t.TypeOf<typeof CompanyCodec>
