import * as Eq from 'fp-ts/Eq'
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
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type Index = t.TypeOf<typeof IndexCodec>

export const EqIndex: Eq.Eq<Index> = {
  equals: (p1, p2) => p1.financialID === p2.financialID && p1.id === p2.id,
}
