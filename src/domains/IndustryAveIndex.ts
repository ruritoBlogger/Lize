import * as Eq from 'fp-ts/Eq'
import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const IndustryAveIndexCodec = t.type({
  industryID: t.number,
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

export const EqIndustryAveIndex: Eq.Eq<IndustryAveIndex> = {
  equals: (p1, p2) =>
    p1.industryID === p2.industryID &&
    p1.id === p2.id &&
    p1.announcementDate === p2.announcementDate,
}
