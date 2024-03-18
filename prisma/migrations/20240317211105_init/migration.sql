-- CreateTable
CREATE TABLE "MerkleTree" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "root" VARCHAR(255) NOT NULL,

    CONSTRAINT "MerkleTree_pkey" PRIMARY KEY ("id")
);
