import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const IndustryAveIndexCodec = t.type({
  IDIndustry: t.number,
  id: t.number,
  announcementDate: tt.DateFromISOString,
  capitalAdequacyRatio: t.number,
  roe: t.number,
  roa: t.number,
  per: t.number,
  pbr: t.number,
  eps: t.number,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type IndustryAveIndex = t.TypeOf<typeof IndustryAveIndexCodec>
