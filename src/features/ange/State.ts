import * as t from 'io-ts'
import * as tt from 'io-ts-types'

// FIXME: 本当はfp-ts/Optionで管理したい
export const StateErrorCodec = t.intersection([
  t.partial({ name: t.string }),
  t.partial({ code: t.string }),
  t.partial({ stack: t.string }),
  t.partial({ message: t.string }),
])

export const RequestCodec = t.type({
  isLoading: t.boolean,
  isLoadingSuccess: tt.option(t.boolean),
  error: tt.option(StateErrorCodec),
})

export const StateCodec = t.type({
  industryRequest: RequestCodec,
  companyRequest: RequestCodec,
  financialStatementRequest: RequestCodec,
})

export type State = t.TypeOf<typeof StateCodec>
export type StateError = t.TypeOf<typeof StateErrorCodec>
