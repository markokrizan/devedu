import Head from "next/head";

export default function Meta({ siteData }) {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={siteData?.generalSettingsDescription} />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
}
