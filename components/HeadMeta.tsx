import React from "react";
import Head from "next/head";

export default function HeadMeta({
  title = "Optichads",
  description = `OptiChads is the #1 NFT Community on Optimism, and we now have collections on Base and Arbitrum too. Hang out, work out, and discuss all things crypto and protein.`,
  keywords = "OptiChads, @OptiChads, Non-Fungible Token, Optimism, Ethereum, Decentralized",
  img = "/images/hero-img.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <meta name="author" content="Jason Pierce 'distractionboy.eth'" />
      <meta property="og:image" content={img} />
      <meta
        name="twitter:image:alt"
        content="a strong black and white man facing right with a white outline aroung him and a red background"
      ></meta>
      <meta property="og:site_name" content="OptiChads" />

      {/* Mobile */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <link rel="apple-touch-startup-image" href="/images/hero-img.png" />
      <meta name="apple-mobile-web-app-title" content="OptiChads" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

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
