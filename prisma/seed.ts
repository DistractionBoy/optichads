import { prisma } from "@/pages/api/prisma-client";
import { Prisma } from "@prisma/client";
import wl from "@/contract/wl.json";

const whitelistData: Prisma.ClaimerCreateInput[] = wl.data;

async function main() {
  console.log(`Start seeding ...`);
  for (const w of whitelistData) {
    const user = await prisma.claimer.create({
      data: w,
    });
    console.log(`Created claimer with wallet ${w.address}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
