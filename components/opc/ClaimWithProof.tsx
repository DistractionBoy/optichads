import useSWR from "swr";
import { ExclamationTriangleIcon, LaptopIcon } from "@radix-ui/react-icons";
import { Contract, ContractInterface } from "@ethersproject/contracts";

import { TypedFetch } from "@/lib/TypedFetch";
import { Claimer } from "@/pages/api/zodSchemas";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAccount } from "wagmi";
import { shortenHex } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

const claimBtnClick = async (
  address: string,
  amount: number,
  proof: string | null
) => {
  try {
    if (window.ethereum === null || window.ethereum === undefined) {
      throw new Error("wallet not connected");
    }
    const signer = "signer";
  } catch {
    console.log("catch");
  }
};

const ClaimWithProof = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useSWR(
    address !== undefined ? `/api/whitelist?address=${address}` : undefined,
    TypedFetch(Claimer)
  );

  if (isLoading) {
    return (
      <Alert variant="default">
        <LaptopIcon className="h-4 w-4" />
        <AlertTitle>Loading...</AlertTitle>
        <AlertDescription>Checking allocations...</AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Uh oh,</AlertTitle>
        <AlertDescription>
          We are sorry but it appears you did not have any holdings that
          conributed towards this drop.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    data &&
    address && (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{address && shortenHex(data.address)}</TableCell>
              <TableCell className="text-right">{data.amount} $OPC</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          onClick={() => {
            claimBtnClick(address, data.amount, data.proof);
          }}
        >
          Claim
        </Button>
      </div>
    )
  );
};

export default ClaimWithProof;
