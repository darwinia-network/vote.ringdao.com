import { Html, Head, Main, NextScript } from "next/document";
import { APP_PAGE_TITLE } from "@/constants";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{APP_PAGE_TITLE}</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body className="bg-primary-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
