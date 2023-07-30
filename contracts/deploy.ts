import { createWallet } from "arweavekit/wallet";
import { createContract } from "arweavekit/contract";
import { readFileSync } from "fs";
const contractSrc = readFileSync("../dist/init.js", "utf-8");
const stateSrc = readFileSync("../dist/init.json", "utf-8");
async function run() {
  const { key } = await createWallet({
    environment: "local",
  });
  console.log("New key created", key);

  const res = await createContract({
    wallet: key,
    contractSource: contractSrc,
    initialState: JSON.stringify(stateSrc),
    environment: "mainnet",
  });

  console.log("This is the status of the new contract", res);
}

run()
  .then(() => console.log("Worked"))
  .catch(() => console.log("Failed"));
