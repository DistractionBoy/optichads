
const path = require('path');
const rootDir = path.resolve("../../");
require('dotenv').config({ path: path.resolve(rootDir, '', '.env') });

const fs = require('fs');
const { ethers, keccak256, Contract } = require("ethers");
const { MerkleTree } = require("merkletreejs");
const { data } = require('../wl.json');
const OPCHAD_CLAIM_ABI = require('../abi/OPCHadClaim.json');
const OPC_DROP_PERMITS = require('../opc-drop-permits.json');

const { ALCHEMY_OPT_SEPOLIA_BASEURL, ALCHEMY_OPT_SEPOLIA_APIKEY, ADMIN_PRIVATE_KEY, OPCHADCLAIM_CONTRACT } = process.env;

const provider = new ethers.JsonRpcProvider(`${ALCHEMY_OPT_SEPOLIA_BASEURL}${ALCHEMY_OPT_SEPOLIA_APIKEY}`);
const wallet = new ethers.Wallet(ADMIN_PRIVATE_KEY, provider);
const opchadClaimContract = new Contract(OPCHADCLAIM_CONTRACT, OPCHAD_CLAIM_ABI.abi, wallet);

const abiCoder = new ethers.AbiCoder();
const leavesData = data.reduce((acc, { address, amount }, index, arr) => {
    acc.push(ethers.keccak256(abiCoder.encode(["address", "uint256"], [address, amount])))
    return acc;
}, []);
const merkletree = new MerkleTree(leavesData, keccak256, { sort: true });
const treeRoot = merkletree.getHexRoot();

writeLeafDataInJsonFile();

// setMerkletreeRootToContact();
// claimRewards();

async function setMerkletreeRootToContact() {
    await opchadClaimContract.setMerkleRoot(treeRoot);
    const root = await opchadClaimContract.merkleRoot();
    if (root === treeRoot) {
        console.log('Set root success');
    }
}

async function claimRewards() {
    const { proof, amount } = OPC_DROP_PERMITS[wallet.address];
    await opchadClaimContract.claimRewards(proof, amount);
    console.log("Claim rewards success");
}

function writeLeafDataInJsonFile() {
    const proofList = {};
    data.forEach(({ address, amount }) => {
        const proof = merkletree.getHexProof(ethers.keccak256(abiCoder.encode(["address", "uint256"], [address, amount])))
        proofList[address] = { proof, amount };
    });
    try {
        fs.writeFileSync('../opc-drop-permits.json', JSON.stringify(proofList), 'utf8');
        console.log('JSON file has been written successfully');
    } catch (err) {
        console.error('Error writing JSON file:', err);
    }
}

console.log("treeRoot", treeRoot);
