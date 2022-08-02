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
  const res: Response = await fetch(`${baseUrl}/api/meta/chads/${tokenId}`);
  const metadata: ChadMetadata = await res.json();
  return {
    props: removeUndefinedForNextJsSerializing({
      metadata,
      tokenId,
    }),
  };
};

export default function ChadDetail({
  metadata,
  tokenId,
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
            showBreadcrumbs
          />
        </div>
      </DarkOverlapShell>
    </>
  );
}
