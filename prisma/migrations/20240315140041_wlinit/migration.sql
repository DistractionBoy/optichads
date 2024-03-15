-- CreateTable
CREATE TABLE "Total" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "address" VARCHAR(255) NOT NULL,
    "amounts" INTEGER[],

    CONSTRAINT "Total_pkey" PRIMARY KEY ("id")
);
