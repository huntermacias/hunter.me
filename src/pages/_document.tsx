import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#18181b" />

        {/* Add these tags for social media previews */}
        <meta property="og:title" content="Hunter Macias — Quality Engineer at Costco Travel" />
        <meta property="og:description" content="Portfolio of Hunter Macias, a Quality Engineer at Costco Travel building test automation, performance tooling, and release confidence for large-scale travel booking systems. Also home to side projects and notes on engineering." />
        <meta name="image" property="og:image" content="/opengraph-image.png" />
        <meta name="author" content="Hunter Macias"></meta>
        <meta property="og:url" content="https://hunter-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HunterMacias" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hunter Macias — Quality Engineer at Costco Travel" />
        <meta name="twitter:description" content="Portfolio of Hunter Macias, a Quality Engineer at Costco Travel building test automation, performance tooling, and release confidence for large-scale travel booking systems." />
        <meta name="twitter:site" content="@HunterMacias_" />
        <meta name="twitter:creator" content="@HunterMacias_" />
        <meta property="og:image" content="/twitter-image.png" />


      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
