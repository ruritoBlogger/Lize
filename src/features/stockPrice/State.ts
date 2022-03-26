import * as t from 'io-ts'
import * as tt from 'io-ts-types'

import { StockPriceCodec } from '../../domains'

// FIXME: 本当はfp-ts/Optionで管理したい
export const StateErrorCodec = t.intersection([
  t.partial({ name: t.string }),
  t.partial({ code: t.string }),
  t.partial({ stack: t.string }),
  t.partial({ message: t.string }),
])

export const StateCodec = t.type({
  stockPrices: t.record(t.number, t.array(StockPriceCodec)),
  isLoading: t.boolean,
  error: tt.option(StateErrorCodec),
})

export type State = t.TypeOf<typeof StateCodec>
export type StateError = t.TypeOf<typeof StateErrorCodec>
