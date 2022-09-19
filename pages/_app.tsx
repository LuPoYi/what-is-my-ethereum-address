import "../styles/index.css"

import { AppProps } from "next/app"
import { Web3ReactProvider } from "@web3-react/core"
import { ethers } from "ethers"

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
