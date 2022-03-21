import * as t from 'io-ts'
import * as tt from 'io-ts-types'

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
  createdAt: tt.date,
  updatedAt: tt.date,
})

export type IndustryAveIndex = t.TypeOf<typeof IndustryAveIndexCodec>
