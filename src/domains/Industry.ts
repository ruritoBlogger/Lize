import * as Eq from 'fp-ts/Eq'
import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const IndustryCodec = t.type({
  name: t.string,
  id: t.number,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type Industry = t.TypeOf<typeof IndustryCodec>

export const EqIndustry: Eq.Eq<Industry> = {
  equals: (p1, p2) => p1.name === p2.name && p1.id === p2.id,
}
