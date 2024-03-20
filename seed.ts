const { toBigInt } = require("ethers");

const { ethers, keccak256 } = require("ethers");
const { MerkleTree } = require("merkletreejs");

const prismaClient = require("@prisma/client");
const whitelist = require("./contract/whitelist.json");
const totals = require("./contract/totals.json");

const { PrismaClient } = prismaClient;
const prisma = new PrismaClient();
const abiCoder = new ethers.AbiCoder();

const getTreeFromWLjson = (): typeof MerkleTree => {
  const leavesData = whitelist.reduce(
    (acc: string[], { address, amount }: any) => {
      acc.push(
        keccak256(abiCoder.encode(["address", "uint256"], [address, amount]))
      );
      return acc;
    },
    []
  );
  return new MerkleTree(leavesData, keccak256, { sort: true });
};

async function load() {
  try {
    console.log(`Generating Merkle Tree ...`);
    const tree = getTreeFromWLjson();
    console.log("Tree generated. Root is: ", tree.getHexRoot());
    console.log(`Start seeding ...`);
    await prisma.tree.deleteMany();
    console.log("Deleted records in MerkleTree table");
    await prisma.claimer.deleteMany();
    console.log("Deleted records in Claimer table");
    await prisma.total.deleteMany();
    console.log("Deleted records in Total table");
    await prisma.tree.create({ data: { root: tree.getHexRoot() } });
    await prisma.claimer.createMany({
      data: whitelist.map(
        ({ address, amount }: { address: string; amount: number }) => ({
          address,
          amount: amount,
          proof: tree.getHexProof(
            ethers.keccak256(
              abiCoder.encode(["address", "uint256"], [address, amount])
            )
          ),
        })
      ),
    });
    await prisma.total.createMany({
      data: totals,
    });
    console.log(`Seeding finished.`);
  } catch (e) {
    console.error("Error seeding the database:", e);
  } finally {
    await prisma.$disconnect();
  }
}

load();
