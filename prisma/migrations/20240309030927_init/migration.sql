/*
  Warnings:

  - The primary key for the `Claimer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Claimer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Claimer" DROP CONSTRAINT "Claimer_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Claimer_pkey" PRIMARY KEY ("id");
