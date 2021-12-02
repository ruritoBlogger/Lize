import * as t from 'io-ts'

export const IndustryCodec = t.type({
  name: t.string,
  id: t.number,
  CreatedAt: t.number,
  UpdatedAt: t.number,
})

export type Industry = t.TypeOf<typeof IndustryCodec>
