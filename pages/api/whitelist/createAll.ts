import type { NextApiRequest, NextApiResponse } from "next";
import wl from "@/contract/wl.json";
import { prisma } from "../prisma-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.claimer.createMany({
      data: wl.data,
    });
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
