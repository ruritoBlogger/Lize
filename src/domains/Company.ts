import * as t from 'io-ts'

export const CompanyCodec = t.type({
  name: t.string,
  id: t.number,
  IDIndustry: t.number,
  IdentificationCode: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type Company = t.TypeOf<typeof CompanyCodec>
