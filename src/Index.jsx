import React from "react";
import ReactDOM from "react-dom/client";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import App from "./App";
const Index = () => (
  <React.Fragment>
    <ArweaveWalletKit>
      <App />
    </ArweaveWalletKit>
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("mountNode"));
root.render(<Index />);
