import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "@ethersproject/bignumber";
import { MintFormContext } from "../lib/state/mintForm";
import { formatEtherscanLink, parseBalance, shortenHex } from "../lib/utils";
import NFTCard from "./NFTCard";
import { calcRange } from "../lib/helpers";
import Link from "next/link";
import { WindowInstanceWithEthereum } from "../lib/types";

export default function MintStepThree() {
  const { account } = useWeb3React();
  const { state: formState, dispatch: formDispatch } =
    useContext(MintFormContext);
  const [products, setProducts] = useState<number[]>();
  const [subtotal, setSubtotal] = useState<BigNumber>();

  const startOver = () => {
    (window as WindowInstanceWithEthereum).location.reload();
    formDispatch({ type: "resetForm" });
  };

  useEffect(() => {
    if (formState.startingTokenId && formState.quantity && !subtotal) {
      const quan = BigNumber.from(formState.quantity);
      const total = formState.pricePerUnit?.mul(quan);
      setProducts(calcRange(formState.quantity, formState.startingTokenId));
      setSubtotal(total);
    }
  }, [formState, formDispatch, subtotal]);

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:gap-x-8 xl:gap-x-24">
        <div>
          <h1 className="text-sm font-medium text-indigo-600">
            Payment successful
          </h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Thanks for ordering
          </p>
          <p className="mt-2 text-base text-gray-500">
            We appreciate your order and as it is still getting validated, hang
            tight and see what you minted!
          </p>

          <dl className="mt-16 text-sm font-medium">
            <dt className="text-gray-900">Transaction number (hash)</dt>
            <dd className="mt-2 text-indigo-600">
              {formState.receipt &&
                formState.receipt.transactionHash.toString()}
            </dd>
          </dl>

          <ul
            role="list"
            className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
          >
            {products &&
              products.map((product) => (
                <li key={product} className="flex py-6 space-x-6">
                  <div className="h-32 w-36">
                    <Link href={`/collection/chads/${product}`} passHref>
                      <NFTCard
                        collection="chads"
                        id={product}
                        variant="noinfo"
                      />
                    </Link>
                  </div>

                  <div className="flex-auto space-y-1">
                    <h3 className="text-gray-900">
                      <Link href={`/collection/chads/${product}`} passHref>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={`/collection/chads/${product}`}
                        >
                          OptiChad {`#${product}`}
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <p className="flex flex-none justify-center font-medium text-gray-900">
                    <span className="mt-0 mr-2 h-2 w-2">
                      <FontAwesomeIcon icon={faEthereum} />
                    </span>{" "}
                    {parseBalance(formState.pricePerUnit.toString())}
                  </p>
                </li>
              ))}
          </ul>

          <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="flex flex-none text-gray-900">
                {" "}
                <span className="mt-0 mr-2 h-2 w-2">
                  <FontAwesomeIcon icon={faEthereum} />
                </span>{" "}
                {subtotal && parseBalance(subtotal.toString())}
              </dd>
            </div>

            <div className="flex justify-between">
              <dt>Gas</dt>
              <dd className="flex flex-none text-gray-900">
                {" "}
                <span className="mt-0 mr-2 h-2 w-2">
                  <FontAwesomeIcon icon={faEthereum} />
                </span>{" "}
                {formState.receipt?.cumulativeGasUsed &&
                  parseBalance(
                    formState.receipt.cumulativeGasUsed.toString(),
                    18,
                    18
                  )}
              </dd>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-8">
              <dt className="text-base">Total</dt>
              <dd className="text-base flex">
                {" "}
                <span className="mt-0 mr-2 h-3 w-3">
                  <FontAwesomeIcon icon={faEthereum} />
                </span>{" "}
                {formState.receipt &&
                  subtotal &&
                  parseBalance(
                    subtotal.add(formState.receipt.cumulativeGasUsed),
                    18
                  )}
              </dd>
            </div>
          </dl>

          <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
            <div>
              <dt className="font-medium text-gray-900">
                Transaction Information
              </dt>
              <dd className="mt-2">
                <div className="not-italic">
                  <span className="block">
                    Smart Contract Address:{" "}
                    {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}
                  </span>
                  <span className="block">
                    Etherscan:{" "}
                    {formState.receipt && (
                      <a
                        className="text-red-600 hover:text-red-500 underline"
                        target="_blank"
                        rel="noreferrer"
                        href={formatEtherscanLink(
                          "Transaction",
                          formState.receipt.transactionHash
                        )}
                      >
                        Open in new tab
                      </a>
                    )}
                  </span>
                  <span className="block">
                    Account: {account && shortenHex(account, 6)}
                  </span>
                </div>
              </dd>
            </div>
          </dl>

          <div className="mt-16 border-t border-gray-200 py-6 text-right">
            <button
              onClick={startOver}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Minting<span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** {
  "blockHash": "0x336207f81a1624b16586ba2e5b92913067531dd921623b530b2cffa2bee7cefd",
  "blockNumber": 1802839,
  "contractAddress": null,
  "cumulativeGasUsed": 158193,
  "from": "0x3ed9d38601748734e94ee8480077cc8d4c8ffb0c",
  "gasUsed": 158193,
  "l1Fee": "0xbf8b",
  "l1FeeScalar": "1.5",
  "l1GasPrice": "0x7",
  "l1GasUsed": "0x123e",
  "logsBloom": "0x00000000400000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000020400000000000020000800000000000000000000000010000000000200000000000001000000000000000000000000000000000000000000000000000000000008000000000040000000000000000000000000000000000000000000000002000000000000000000000008000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000",
  "status": true,
  "to": "0xb87b4f704401930c968a29328e33daa5f87e47c2",
  "transactionHash": "0x72097bd53baaa9866eac9b611c8b7413605e43ab21ef7a38af89d52bd48143c1",
  "transactionIndex": 0,
  "events": {
      "Transfer": {
          "address": "0xb87b4F704401930C968a29328e33DAa5F87e47c2",
          "blockHash": "0x336207f81a1624b16586ba2e5b92913067531dd921623b530b2cffa2bee7cefd",
          "blockNumber": 1802839,
          "logIndex": 0,
          "removed": false,
          "transactionHash": "0x72097bd53baaa9866eac9b611c8b7413605e43ab21ef7a38af89d52bd48143c1",
          "transactionIndex": 0,
          "id": "log_48080495",
          "returnValues": {
              "0": "0x0000000000000000000000000000000000000000",
              "1": "0x3ED9d38601748734e94Ee8480077cc8D4C8ffb0C",
              "2": "387",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0x3ED9d38601748734e94Ee8480077cc8D4C8ffb0C",
              "tokenId": "387"
          },
          "event": "Transfer",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "raw": {
              "data": "0x",
              "topics": [
                  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                  "0x0000000000000000000000000000000000000000000000000000000000000000",
                  "0x0000000000000000000000003ed9d38601748734e94ee8480077cc8d4c8ffb0c",
                  "0x0000000000000000000000000000000000000000000000000000000000000183"
              ]
          }
      }
  }
}
*/
