import './_app.sass'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import { store } from '../features'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>タイトル</title>
        </Head>
        <Component {...pageProps} />
      </>
    </Provider>
  )
}

export default MyApp
