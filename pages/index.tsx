import { InjectedConnector } from "@web3-react/injected-connector"
import Layout from "../components/Layout"
import Link from "next/link"
import { ethers } from "ethers"
import { useWeb3React } from "@web3-react/core"

const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const IndexPage = () => {
  const { active, account, library, chainId, activate, deactivate } =
    useWeb3React()

  const connectOnClick = () => activate(injectedConnector)
  const disconnectOnClick = () => deactivate()

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <div>
        {!active ? (
          <button type="button" onClick={connectOnClick}>
            connect
          </button>
        ) : (
          <button type="button" onClick={disconnectOnClick}>
            disconnect
          </button>
        )}
      </div>
      account: {account}
      {/* 
      <button
        color="primary"
        onClick={() => handleConnectWalletOnClick(injected)}
      >
        Connect
      </button> */}
    </Layout>
  )
}

export default IndexPage
