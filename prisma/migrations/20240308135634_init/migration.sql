-- CreateTable
CREATE TABLE "Claimer" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "amount" INTEGER NOT NULL,
    "proof" TEXT NOT NULL,

    CONSTRAINT "Claimer_pkey" PRIMARY KEY ("id")
);
