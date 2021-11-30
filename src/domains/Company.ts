import * as t from 'io-ts'

export const CampanyCodec = t.type({
  name: t.string,
  identificationCode: t.number,
  industry: t.number,
  createdAt: t.number,
  updatedAt: t.number,
})

export type Campany = t.TypeOf<typeof CampanyCodec>
