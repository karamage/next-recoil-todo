import React from 'react'
import { AppProps } from 'next/app'
import '../../styles/globals.css'
import '../../styles/index.css'

import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
