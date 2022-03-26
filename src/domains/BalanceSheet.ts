import * as Eq from 'fp-ts/Eq'
import * as t from 'io-ts'
import * as tt from 'io-ts-types'

export const BalanceSheetCodec = t.type({
  financialID: t.number,
  id: t.number,
  totalAssets: t.number,
  netAssets: t.number,
  capitalStock: t.number,
  profitSurplus: t.number,
  cashEquivalent: t.number,
  printedNum: t.number,
  createdAt: tt.DateFromISOString,
  updatedAt: tt.DateFromISOString,
})

export type BalanceSheet = t.TypeOf<typeof BalanceSheetCodec>

export const EqBalanceSheet: Eq.Eq<BalanceSheet> = {
  equals: (p1, p2) => p1.financialID === p2.financialID && p1.id === p2.id,
}
