/*
  Warnings:

  - You are about to drop the `MerkleTree` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MerkleTree";

-- CreateTable
CREATE TABLE "Tree" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "root" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tree_pkey" PRIMARY KEY ("id")
);
