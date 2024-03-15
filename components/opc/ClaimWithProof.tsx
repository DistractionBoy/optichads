import useSWR from "swr";
import { TypedFetch } from "@/lib/TypedFetch";
import { Claimer } from "@/pages/api/zodSchemas";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAccount } from "wagmi";
import { toast } from "sonner";
import { shortenHex } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ClaimWithProof = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useSWR(
    address !== undefined ? `/api/whitelist?address=${address}` : undefined,
    TypedFetch(Claimer)
  );

  if (isLoading) {
    return (
      <Alert variant="default">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Loading...</AlertTitle>
        <AlertDescription>Checking allocations...</AlertDescription>
      </Alert>
    );
  }

  if (error) {
    toast(error.message);
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
    data && (
      <Table>
        <TableCaption>Hope you set a new max, bro.</TableCaption>
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
    )
  );
};

export default ClaimWithProof;
