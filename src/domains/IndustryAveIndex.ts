import * as t from 'io-ts'

export const IndustryAveIndexCodec = t.type({
  financialID: t.number,
  announcementDate: t.number,
  capitalAdequacyRatio: t.number,
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
})

export type IndustryAveIndex = t.TypeOf<typeof IndustryAveIndexCodec>
