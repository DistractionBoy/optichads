import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import useSWR from "swr";
import { NFTDetailView } from "../../components";
import { NftMetadataResponse } from "../api/nftMetadata";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tokenId } = context.query;

  return {
    props: {
      tokenId: tokenId as string,
    },
  };
};

const ChadPage: NextPage = ({
  tokenId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data, error, isValidating } = useSWR<NftMetadataResponse>(
    `/api/nftMetadata?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}&tokenId=${tokenId}`
  );

  const loading = !data && !error && isValidating;

  if (loading) {
    return <div>loading ...</div>;
  }

  return data ? (
    <div>
      <NFTDetailView collection="chads" id={tokenId} />
    </div>
  ) : null;
};

export default ChadPage;
