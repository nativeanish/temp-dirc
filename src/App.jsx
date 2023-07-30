import React, { useEffect } from "react";
import { ConnectButton, useConnection } from "arweave-wallet-kit";
import Editor from "./Editor/Editor";
function App() {
  const { connected } = useConnection();
  useEffect(() => {
    console.log("Connection changed");
  }, [connected]);
  return (
    <div>
      <ConnectButton
        accent="rgb(88, 84, 80)"
        profileModal={true}
        showBalance={false}
        showProfilePicture={false}
      />
      {connected ? <Editor /> : null}
    </div>
  );
}

export default App;
