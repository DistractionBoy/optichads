import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";
import { ChadMetadata } from "@/lib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tokenId } = req.query;
  const filePath = path.join(
    `${process.cwd()}/pages/api/meta/chads/`,
    `${tokenId}.json`
  );
  const metadata = await fs.readFile(filePath, {
    encoding: "utf-8",
  });
  const json_data: ChadMetadata[] = JSON.parse(metadata);

  res.status(200).json(json_data);
}
