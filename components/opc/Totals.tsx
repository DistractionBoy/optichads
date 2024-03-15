import useSWR from "swr";
import { TypedFetch } from "@/lib/TypedFetch";
import { Total } from "@/pages/api/zodSchemas";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useAccount } from "wagmi";
import { toast } from "sonner";

const Totals = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useSWR(
    address !== undefined ? `/api/total?address=${address}` : undefined,
    TypedFetch(Total)
  );

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <h1>For address {address}...</h1>
      </div>
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
      <div className="flex flex-col">
        <h1>For address {address}</h1>
        The table below shows how much $OPC you can claim based on your holdings
        in the specified collection.
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Collection</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.amounts.map((amount, idx) => (
              <TableRow key={idx}>
                <TableCell>Community</TableCell>
                <TableCell className="text-right">{amount} $OPC</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  );
};

export default Totals;
