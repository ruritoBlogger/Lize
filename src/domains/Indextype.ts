import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const IndexCodec = t.type({
  financialID: t.number,
  id: t.number,
  roe: t.number,
  roa: t.number,
  per: t.number,
  pbr: t.number,
  eps: t.number,
  createdAt: tt.date,
  updatedAt: tt.date,
})

export type Index = t.TypeOf<typeof IndexCodec>
