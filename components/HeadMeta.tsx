import React from "react";
import Head from "next/head";

export default function HeadMeta({
  title = "BranLibs: Entrance",
  description = "In a dark corner in the Library of Bran often missed by its readers, a section not maintained by clurgy awaits you to discover its secrets.",
  keywords = "Cryptovania, @CryptovaniaNFT, Non-Fungible Token, Optimism, Ethereum, Vampires",
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
        content="https://distractors-of-dracula.s3.amazonaws.com/library/940-square.webp"
      />
      <meta
        name="twitter:image:alt"
        content="an image of a man holding a beer with evil eyes around him"
      ></meta>
      <meta property="og:site_name" content="BranLibs" />

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
