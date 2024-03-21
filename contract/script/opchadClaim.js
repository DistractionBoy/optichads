
const path = require('path');
const rootDir = path.resolve("../../");
require('dotenv').config({ path: path.resolve(rootDir, '', '.env') });

const { ethers, keccak256, Contract } = require("ethers");
const OPCHAD_CLAIM_ABI = require('../abi/OPCHadClaim.json');
const OPCHAD_ABI = require('../abi/OPChad.json');
const OPC_DROP_PERMITS = require('../opc-drop-permits.json');

const { ALCHEMY_OPT_SEPOLIA_BASEURL, ALCHEMY_OPT_SEPOLIA_APIKEY, ADMIN_PRIVATE_KEY, OPCHADCLAIM_CONTRACT, OPCHAD_CONTRACT } = process.env;

const provider = new ethers.JsonRpcProvider(`${ALCHEMY_OPT_SEPOLIA_BASEURL}${ALCHEMY_OPT_SEPOLIA_APIKEY}`);
const wallet = new ethers.Wallet("5321ec686e833d3c9c1a4b01e5af7bda18146bdb5b4d767d311bc55c7602cb52", provider);
const opchadClaimContract = new Contract("0xA642b1649a25a45d22f679db5c5D7ece0b32390c", OPCHAD_CLAIM_ABI.abi, wallet);
const opchadContract = new Contract(OPCHAD_CONTRACT, OPCHAD_ABI.abi, wallet);

// openClaimRewards();

// setAllowanceAddress();

// approveToOPChadClaim();

claimRewards();

async function claimRewards() {
    const { proof, amount } = OPC_DROP_PERMITS[wallet.address];
    console.log('proof', proof);
    await opchadClaimContract.claimRewards(amount, proof);
    console.log("Claim rewards success");
}

async function setAllowanceAddress() {
    await opchadClaimContract.setAllowanceAddress(wallet.address);
}

async function approveToOPChadClaim() {
    // Airdrop 20% opc
    let claimAllowance = (ethers.toBigInt("1000000000") * ethers.toBigInt("10") ** ethers.toBigInt("18")) * BigInt(2) / BigInt(10);
    // approve to the OPChadClaim address
    await opchadContract.approve(OPCHADCLAIM_CONTRACT, claimAllowance);
}

async function openClaimRewards() {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const TWO_MONTH_IN_SECS = 90 * 24 * 60 * 60;
    console.log(currentTimestamp + TWO_MONTH_IN_SECS);
    await opchadClaimContract.setClaimPeriod(currentTimestamp - TWO_MONTH_IN_SECS, currentTimestamp + TWO_MONTH_IN_SECS);
}