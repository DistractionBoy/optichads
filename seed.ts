const prismaClient = require("@prisma/client");
const whitelist = require("./contract/whitelist.json");
const totals = require("./contract/totals.json");

const { PrismaClient } = prismaClient;
const prisma = new PrismaClient();

async function load() {
  try {
    console.log(`Start seeding ...`);
    await prisma.claimer.deleteMany();
    console.log("Deleted records in Claimer table");
    await prisma.total.deleteMany();
    console.log("Deleted records in Total table");
    await prisma.claimer.createMany({
      data: whitelist,
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
