/*
  Warnings:

  - The `proof` column on the `Claimer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Claimer" DROP COLUMN "proof",
ADD COLUMN     "proof" TEXT[];
