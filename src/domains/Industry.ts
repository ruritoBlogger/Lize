import * as t from 'io-ts'

export const IndustryCodec = t.type({
  name: t.string,
  id: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type Industry = t.TypeOf<typeof IndustryCodec>
