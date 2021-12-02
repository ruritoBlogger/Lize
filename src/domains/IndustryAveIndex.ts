import * as t from 'io-ts'

export const IndustryAveIndexCodec = t.type({
  IDIndustry: t.number,
  id: t.number,
  AnnouncementDate: t.number,
  CapitalAdequacyRatio: t.number,
  ROE: t.number,
  ROA: t.number,
  PER: t.number,
  PBR: t.number,
  EPS: t.number,
  PCFR: t.number,
  yieldGap: t.number,
  EBITDA: t.number,
  EV: t.number,
  EVdivEBITDA: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type IndustryAveIndex = t.TypeOf<typeof IndustryAveIndexCodec>
