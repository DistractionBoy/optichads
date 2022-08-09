import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { removeUndefinedForNextJsSerializing } from "../../../lib/utils";
import { ChadMetadata } from "../../../lib";
import {
  NFTDetailView,
  DarkOverlapShell,
  HeadMeta,
} from "../../../components/";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tokenId = context.params?.id as string;
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASEURL;
  const resOne: Response = await fetch(`${baseUrl}/api/meta/chads/${tokenId}`);
  const resTwo: Response = await fetch(`${baseUrl}/api/rarity/${tokenId}`);
  const metadata: ChadMetadata = await resOne.json();
  const rarity: { rank: number; tokenId: number; rarityScore: number } =
    await resTwo.json();
  return {
    props: removeUndefinedForNextJsSerializing({
      metadata,
      tokenId,
      rarity,
    }),
  };
};

export default function ChadDetail({
  metadata,
  tokenId,
  rarity,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeadMeta
        title={`OptiChad#${tokenId}`}
        description={`View the details of OptiChad#${tokenId}`}
        keywords={`View, OptiChads, OptiChad#${tokenId}`}
      />
      <DarkOverlapShell title={`OptiChad #${tokenId}`}>
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <NFTDetailView
            data={metadata}
            collection="chads"
            id={Number(tokenId)}
            rarity={rarity}
            showBreadcrumbs
          />
        </div>
      </DarkOverlapShell>
    </>
  );
}
