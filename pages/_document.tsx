import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            strategy="beforeInteractive"
          ></Script>
          <Script
            type="text/javascript"
            src="https://unpkg.com/web3modal@1.9.8/dist/index.js"
            strategy="beforeInteractive"
          ></Script>
          <Script
            type="text/javascript"
            src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"
            strategy="beforeInteractive"
          ></Script>
          <Script
            type="text/javascript"
            src="https://unpkg.com/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js"
            strategy="beforeInteractive"
          ></Script>
          <Script
            type="text/javascript"
            src="https://rampp.xyz/embeds/v2.1/embed.js"
            strategy="beforeInteractive"
            data-uuid="f6881fdb-33bf-44e5-b200-cba929c86e6d"
          ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
