// components/Layout.js
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, title = "News", description = "", ogImage }) {
  const ogImageUrl = ogImage || "/images/og-default.jpg";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
