/*
  Warnings:

  - The primary key for the `Claimer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Claimer" DROP CONSTRAINT "Claimer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "proof" DROP NOT NULL,
ADD CONSTRAINT "Claimer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Claimer_id_seq";
