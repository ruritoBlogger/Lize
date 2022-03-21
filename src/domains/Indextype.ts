import * as t from 'io-ts'

export const IndexCodec = t.type({
  financialID: t.number,
  id: t.number,
  roe: t.number,
  roa: t.number,
  per: t.number,
  pbr: t.number,
  eps: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type Index = t.TypeOf<typeof IndexCodec>
