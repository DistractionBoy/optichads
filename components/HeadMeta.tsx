import React from "react";
import Head from "next/head";

export default function HeadMeta({
  title = "Optichads",
  description = `With a FREE public mint and 50% donated to retroactive public goods, 
    Optichads proves it cares about the community. We aim to inspire charitable giving 
    and improving health and wellness.`,
  keywords = "OptiChads, @OptiChads, Non-Fungible Token, Optimism, Ethereum, Decentralized",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <meta name="author" content="Jason Pierce 'distractionboy.eth'" />
      <meta
        property="og:image"
        content="https://optichads.s3.amazonaws.com/library/perfect-logo.png"
      />
      <meta
        name="twitter:image:alt"
        content="a strong black and white man facing right with a white outline aroung him and a red background"
      ></meta>
      <meta property="og:site_name" content="OptiChads" />

      {/* Favicons */}
      <link
        rel="shortcut icon"
        href="/images/favicon.ico"
        type="image/x-icon"
      />
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/images/apple-touch-icon.png"
      />

      {/* Android Devices High Resolution */}
      <link
        rel="icon"
        sizes="192x192"
        href="/images/android-chrome512x512.png"
      />
      {/* Android Devices Normal Resolution */}
      <link
        rel="icon"
        sizes="128x128"
        href="/images/android-chrome192x192.png"
      />
    </Head>
  );
}
