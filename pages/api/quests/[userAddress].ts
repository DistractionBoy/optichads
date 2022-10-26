import type { NextApiRequest, NextApiResponse } from "next";
import {
  getIsHolderOfCollection,
  postMsgToRaffleBot,
} from "../../../lib/helpers";
import chaddresses from "./chaddresses.json";

export type EligibilityResponse = {
  isEligible: boolean;
};

type SuggestionChadOptions = {
  username: string;
  address: string;
  reason: string;
  account: string;
};

const suggestionChad = ({
  username,
  address,
  reason,
  account,
}: SuggestionChadOptions) => {
  const post = `
    A raffle Chad gives this reason:\`\`\`${reason}\`\`\`
    for user: ${username}
    and address: ${address}
  
    Signee Account#: ${account}
    --------------------------------------------------------------`;
  postMsgToRaffleBot(post).then((response) => console.log(response));
};

const handledErrorMsg = `We're sorry, you must enter an address that has not held an OptiChad before. This raffle's purpose is to give an opportunity to people who are new to OptiChads.`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EligibilityResponse>
) {
  const json_data = chaddresses;
  const { userAddress: account } = req.query;
  const { reason, username, address } = JSON.parse(req.body);
  const addressHasBeenChad = json_data.includes(address);
  // console.log("userAddress is: ", account);
  // console.log("body is: ", req.body);
  // console.log("reason: ", reason);
  // console.log("address: ", address);
  // console.log("username: ", username);
  try {
    if (addressHasBeenChad) {
      throw new Error(handledErrorMsg);
    }
    getIsHolderOfCollection(
      address,
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
    ).then(({ isHolderOfCollection }) => {
      // console.log("isHolderOfCollection is: ", isHolderOfCollection);
      if (isHolderOfCollection) {
        throw new Error(handledErrorMsg);
      } else {
        if (account && typeof account === "string") {
          suggestionChad({ username, reason, address, account });
        }
      }
      res.status(200).json({ isEligible: true });
    });
  } catch (e: any) {
    if (e.message === handledErrorMsg) {
      res.status(500).json(e.message);
    } else {
      res.status(e.status).json(e.message);
    }
  }
}
