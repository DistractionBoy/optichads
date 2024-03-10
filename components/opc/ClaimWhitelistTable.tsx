import useSWR from "swr";
import { TypedFetch } from "@/lib/TypedFetch";
import { Claimer } from "@/pages/api/zodSchemas";
import { z } from "zod";

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

const ClaimWhitelistTable = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useSWR(
    address !== undefined ? `/api/whitelist?address=${address}` : undefined,
    TypedFetch(z.array(Claimer))
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

  return data && data.length > 0 ? (
    <Table>
      <TableCaption>
        Hop on the scale, bro. Let&apos;s see how shredded you are going to get!
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Address</TableHead>

          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{data[0].address}</TableCell>
          <TableCell className="text-right">{data[0].amount} $OPC</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ) : (
    <Table>
      <TableCaption>
        Sorry bro, looks like you are not on the list.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Address</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{address}</TableCell>
          <TableCell className="text-right">0 $OPC</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ClaimWhitelistTable;
