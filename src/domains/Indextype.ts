import * as t from 'io-ts'

export const IndexCodec = t.type({
  IDfinancial: t.number,
  id: t.number,
  CapitalAdequacyRatio: t.number,
  ROE: t.number,
  ROA: t.number,
  PER: t.number,
  PBR: t.number,
  EPS: t.number,
  PCFR: t.number,
  YieldGap: t.number,
  EBITDA: t.number,
  EV: t.number,
  EVdivEBITDA: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type Index = t.TypeOf<typeof IndexCodec>
