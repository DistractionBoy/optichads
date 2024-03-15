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

const ClaimWithProof = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useSWR(
    address !== undefined ? `/api/whitelist?address=${address}` : undefined,
    TypedFetch(Claimer)
  );

  if (isLoading) {
    return (
      <Table>
        <TableCaption className="animate-pulse">
          Loading up the charts..
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Loading...</TableCell>
            <TableCell className="text-right">Loading...</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  if (error) {
    toast(error.message);
    return (
      <Table>
        <TableCaption>
          Sorry bro, we encountered an error but do another rep and you will be
          fine.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>ERROR</TableCell>
            <TableCell className="text-right">ERROR</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    data && (
      <Table>
        <TableCaption>
          Hop on the scale, bro. Let&apos;s see how shredded you are going to
          get!
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>

            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{data.address}</TableCell>
            <TableCell className="text-right">{data.amount} $OPC</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  );
};

export default ClaimWithProof;
