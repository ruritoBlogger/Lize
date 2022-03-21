import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const IndustryCodec = t.type({
  name: t.string,
  id: t.number,
  createdAt: tt.date,
  updatedAt: tt.date,
})

export type Industry = t.TypeOf<typeof IndustryCodec>
