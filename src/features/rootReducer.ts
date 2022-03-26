import { combineReducers } from '@reduxjs/toolkit'

import { companySlice } from './company'
import { industrySlice } from './industry'

export const rootReducer = combineReducers({
  industry: industrySlice.reducer,
  company: companySlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
