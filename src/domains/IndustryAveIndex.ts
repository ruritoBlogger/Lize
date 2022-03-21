import * as t from 'io-ts'

export const IndustryAveIndexCodec = t.type({
  IDIndustry: t.number,
  id: t.number,
  announcementDate: t.number,
  capitalAdequacyRatio: t.number,
  roe: t.number,
  roa: t.number,
  per: t.number,
  pbr: t.number,
  eps: t.number,
  pcfr: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type IndustryAveIndex = t.TypeOf<typeof IndustryAveIndexCodec>
