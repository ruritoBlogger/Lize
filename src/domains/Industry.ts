import * as t from 'io-ts'

export const IndustryCodec = t.type({
  name: t.string,
})

export type Industry = t.TypeOf<typeof IndustryCodec>
