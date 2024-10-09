import { http, createConfig } from "wagmi";
import { injected } from "wagmi/connectors";
import { walletConnect, coinbaseWallet } from "wagmi/connectors";
import {
  PUB_APP_DESCRIPTION,
  PUB_APP_NAME,
  PUB_CHAIN,
  PUB_PROJECT_URL,
  PUB_WALLET_CONNECT_PROJECT_ID,
  PUB_WALLET_ICON,
  PUB_WEB3_ENDPOINT,
} from "@/constants";
import {darwinia} from "viem/chains";
import type { Chain } from "viem/chains";

// wagmi config
const metadata = {
  name: PUB_APP_NAME,
  description: PUB_APP_DESCRIPTION,
  url: PUB_PROJECT_URL,
  icons: [PUB_WALLET_ICON],
};

const crabChain: Chain = {
  // Define your Crab network configuration
  id: 44, // Crab network chain ID
  name: "Crab2",
  rpcUrls: { default: { http: ["https://crab-rpc.darwinia.network"] } },
  nativeCurrency: {
    decimals: 18,
    name: "Crab",
    symbol: "CRAB",
  },
  blockExplorers: { default: { name: "Carb scab", url: "https://crab-scan.darwinia.network/" } },
};

const KoiChain: Chain = {
  // Define your Crab network configuration
  id: 701, // Crab network chain ID
  name: "Koi",
  rpcUrls: { default: { http: ["https://koi-rpc.darwinia.network"] } },
  nativeCurrency: {
    decimals: 18,
    name: "KRing",
    symbol: "KRING",
  },
  blockExplorers: { default: { name: "Koi scab", url: "https://koi-scan.darwinia.network/" } },
};

export const config = createConfig({
  chains: [PUB_CHAIN, darwinia, crabChain, KoiChain],
  ssr: true,
  transports: {
    [PUB_CHAIN.id]: http(PUB_WEB3_ENDPOINT, { batch: true }),
    [darwinia.id]: http(darwinia.rpcUrls.default.http[0], { batch: true }),
    [crabChain.id]: http(PUB_WEB3_ENDPOINT, { batch: true }),
  },
  connectors: [
    walletConnect({
      projectId: PUB_WALLET_CONNECT_PROJECT_ID,
      metadata,
      showQrModal: false,
    }),
    // coinbaseWallet({ appName: metadata.name, appLogoUrl: metadata.icons[0] }),
  ],
});
