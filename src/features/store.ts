import { configureStore } from '@reduxjs/toolkit'

import { rootReducer, RootState } from './rootReducer'

/**
 * NOTE:
 * react-reduxで提供されているDefaultRootStateはdefaultだとstateに対して型推論が働かない
 * なので型推論を働かせるためにいくつかの要素を上書きする
 *
 * URL: https://qiita.com/Takepepe/items/6addcb1b0facb8c6ff1f
 */
// TODO: useDispatch, useStoreの型推論も出来るようにする
declare module 'react-redux' {
  // eslint-disable-next-line
  interface DefaultRootState extends RootState {}
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // FIXME: 本当は個別にチェックすべき
      serializableCheck: false,
    }),
})
