import { combineReducers } from '@reduxjs/toolkit'

import { industrySlice } from './industry'

export const rootReducer = combineReducers({
  industry: industrySlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
