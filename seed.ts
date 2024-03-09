const prismaClient = require("@prisma/client");
const wl = require("./contract/wl.json");

const { PrismaClient } = prismaClient;
const prisma = new PrismaClient();

const whitelistData = wl.data;

async function load() {
  try {
    console.log(`Start seeding ...`);
    await prisma.claimer.deleteMany();
    console.log("Deleted records in claimer table");
    await prisma.claimer.createMany({
      data: whitelistData,
    });
    console.log(`Seeding finished.`);
  } catch (e) {
    console.error("Error seeding the database:", e);
  } finally {
    await prisma.$disconnect();
  }
}

load();
