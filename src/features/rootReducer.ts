import { combineReducers } from '@reduxjs/toolkit'

import { companySlice } from './company'
import { industrySlice } from './industry'
import { stockPriceSlice } from './stockPrice'

export const rootReducer = combineReducers({
  industry: industrySlice.reducer,
  company: companySlice.reducer,
  stockPrice: stockPriceSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
