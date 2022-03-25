import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // FIXME: 本当は個別にチェックすべき
      serializableCheck: false,
    }),
})
