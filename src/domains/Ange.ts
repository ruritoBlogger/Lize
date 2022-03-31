import * as t from 'io-ts'

export const AngeResponseCodec = t.type({
  message: t.string,
})

export type AngeResponse = t.TypeOf<typeof AngeResponseCodec>
