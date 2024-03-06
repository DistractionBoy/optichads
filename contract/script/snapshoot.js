const path = require("path");
const rootDir = path.resolve("../../");
require("dotenv").config({ path: path.resolve(rootDir, "", ".env") });

const { ethers, keccak256, Contract } = require("ethers");
const { MerkleTree } = require("merkletreejs");
const { data } = require("../wl.json");
const OPCHadClaimABI = require("../abi/OPCHadClaim.json");

const {
  ALCHEMY_OPT_SEPOLIA_BASEURL,
  ALCHEMY_OPT_SEPOLIA_APIKEY,
  ADMIN_PRIVATE_KEY,
  OPCHADCLAIM_CONTRACT,
} = process.env;

const provider = new ethers.JsonRpcProvider(
  `${ALCHEMY_OPT_SEPOLIA_BASEURL}${ALCHEMY_OPT_SEPOLIA_APIKEY}`
);
const wallet = new ethers.Wallet(ADMIN_PRIVATE_KEY, provider);
const opchadClaimContract = new Contract(
  OPCHADCLAIM_CONTRACT,
  OPCHadClaimABI.abi,
  wallet
);

const abiCoder = new ethers.AbiCoder();
const leafData = data.reduce((acc, { address, amount }, index, arr) => {
  acc.push(
    ethers.keccak256(abiCoder.encode(["address", "uint256"], [address, amount]))
  );
  return acc;
}, []);
const merkletree = new MerkleTree(leafData, keccak256, { sort: true });
const treeRoot = merkletree.getHexRoot();

// setMerkletreeRootToContact();

async function setMerkletreeRootToContract() {
  await opchadClaimContract.setMerkleRoot(treeRoot);
  const root = await opchadClaimContract.merkleRoot();
  if (root === treeRoot) {
    console.log("set root success");
  }
}

console.log("treeRoot", treeRoot);
