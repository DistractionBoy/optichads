import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Tree } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query;
  if (!address || Array.isArray(address)) {
    throw new Error("undefined params");
  }
  try {
    const data: Tree = await prisma.tree.findFirstOrThrow();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status || 500).json(e);
  }
}
