import * as t from 'io-ts'

export const IndexCodec = t.type({
  financialID: t.number,
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

export type Index = t.TypeOf<typeof IndexCodec>
