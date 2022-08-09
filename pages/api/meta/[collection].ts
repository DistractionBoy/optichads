import type { NextApiRequest, NextApiResponse } from "next";
import { ChadMetadata } from "../../../lib";
import allChadsMetadata from "./chads/10000.json";
import * as R from "ramda";

// const getJsonData = (collection: string) => {
//   switch (collection) {
//     case "bunny":
//       return bunnydata as BunnyMetadata[];
//     case "pbunny":
//       return pbunnydata as BunnyMetadata[];
//     case "citizen":
//       return citizendata as BunnyMetadata[];
//     case "sad-bunny":
//       return sadBunnyMetadata as BunnyMetadata[];
//     default:
//       return bunnydata as BunnyMetadata[];
//   }
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { collection, filter, pages, page, pagesize, id } = req.query;
  const json_data: ChadMetadata[] = [allChadsMetadata];

  if (id) {
    const tokenId = Number(id) - 1;
    res.status(200).json(json_data[tokenId]);
  } else {
    const quantity =
      (pagesize ? Number(pagesize) : 50) * (pages ? Number(pages) : 1);
    // const BUNNY_QTY = json_data && json_data.length;
    // const totalDropping = BUNNY_QTY - quantity;
    // console.log("page is: ", page);
    // console.log("pagesize is: ", pagesize);
    // console.log("quantity: ", quantity);
    // console.log("totalDropping: ", totalDropping);
    // console.log("collection is: ", collection);
    // let sortedData = R.dropLast(
    //   totalDropping,
    //   R.sort(R.ascend(R.prop("edition")), json_data)
    // );
    // if (Number(page) && Number(page) > 0) {
    //   sortedData = sortedData.splice(
    //     Number(pagesize) * (Number(page) - 1),
    //     Number(pagesize)
    //   );
    // }
    res.status(200).json(quantity);
  }
}
