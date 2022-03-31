import { combineReducers } from '@reduxjs/toolkit'

import { angeSlice } from './ange'
import { companySlice } from './company'
import { financialStatementSlice } from './financialStatement'
import { incomeStatementSlice } from './incomeStatement'
import { industrySlice } from './industry'
import { stockPriceSlice } from './stockPrice'

export const rootReducer = combineReducers({
  industry: industrySlice.reducer,
  company: companySlice.reducer,
  stockPrice: stockPriceSlice.reducer,
  financialStatement: financialStatementSlice.reducer,
  incomeStatement: incomeStatementSlice.reducer,
  ange: angeSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
