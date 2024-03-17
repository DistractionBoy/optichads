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
import { shortenHex } from "@/lib/utils";

const Totals = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useSWR(
    address !== undefined ? `/api/total?address=${address}` : undefined,
    TypedFetch(Total)
  );

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <h2>For address {address && shortenHex(address, 4)}...</h2>
      </div>
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
    data && (
      <div className="flex flex-col">
        <h2>For address {address && shortenHex(address, 4)}</h2>
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
            {data.amounts.map(
              (amount, idx) =>
                amount > 0 && (
                  <TableRow key={idx}>
                    <TableCell>{communities[idx]}</TableCell>
                    <TableCell className="text-right">
                      {legend[idx](amount)} $OPC
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </div>
    )
  );
};

export default Totals;

const legend = [
  (n: number) => n * 14000,
  (n: number) => n * 1400,
  (n: number) => n * 1800,
  (n: number) => (n * 420 >= 10800 ? 10800 : n * 420),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  // 2nd set
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 4200 >= 4200 ? 4200 : n * 4200),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 4200 >= 42000 ? 42000 : n * 4200),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  // 3rd
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 4200 >= 84000 ? 84000 : n * 4200),
  (n: number) => (n * 420 >= 42000 ? 42000 : n * 4200),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  // 4th
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  // 5th
  (n: number) => (n * 420 >= 4200 ? 4200 : n * 420),
  (n: number) => n,
];

const communities = [
  "OptiChads",
  "ArbiBabes",
  "Base Brigade",
  "OptiChads Song",
  "ArbiBabes Song",
  "Early Optimist",
  "MetaBus",
  "TickledPicklez",
  "Bored Town",
  "Apetimism",
  "Crypto Testers",
  "Motorheadz",
  "OP Bunnies",
  "Poop Nation",
  "OP Orcas",
  "Base Gods",
  "Mochimons",
  "Based Fellas",
  "NFToshi",
  "Collective Nouns",
  "DogePixels",
  "Total",
];

/**
 * OptiChads!A:A;ArbiBabes!A:A;BaseBrigade!A:A;OptiChadsSong!A:A;ArbiBabesSong!A:A;
 * EarlyOptimist!A:A;MetaBus!A:A;TickledPicklez!A:A;BoredTown!A:A;Apetimism!A:A;
 * CryptoTesters!A:A;Motorheadz!A:A;OPBunnies!A:A;PoopNation!A:A;OPOrcas!A:A;
 * BaseGods!A:A;Mochimons!A:A;BasedFellas!A:A;NFToshi!A:A;CollectiveNouns!A:A;
 * DogePixels!A:A
 *
 * =SUM(Multiply(B1,14000),Multiply(C1,1400),Multiply(D1,1800),MIN(Multiply(E1,420), 10800),Min(Multiply(F1,420), 4200),
 * Min(Multiply(G1, 420), 4200),Min(Multiply(H1,4200), 4200),Min(Multiply(I1,420), 4200),Min(Multiply(J1,4200), 42000),Min(Multiply(K1,420), 4200),
 * Min(Multiply(L1,420), 4200),Min(Multiply(M1,4200), 84000),Min(Multiply(N1,4200), 42000),Min(Multiply(O1,420), 4200),Min(Multiply(P1,420), 4200),
 * Min(Multiply(Q1,420), 4200),Min(Multiply(R1,420), 4200),Min(Multiply(S1,420), 4200),Min(Multiply(T1,420), 4200),Min(Multiply(U1,420), 4200),
 * Min(Multiply(V1,420), 4200))
 */
