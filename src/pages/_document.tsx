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
        <meta property="og:title" content="Hunter Macias: Innovative Software Engineer & Tech Problem Solver" />
        <meta property="og:description" content="Dive into the portfolio of Hunter Macias, a passionate software engineer with a knack for tackling complex tech challenges. Discover a blend of cutting-edge projects showcasing expertise in AI, full-stack development, and cloud solutions. John's portfolio is not just a display of technical skills but a testament to a continuous journey of learning, innovation, and driving impact in the tech world." />
        <meta name="image" property="og:image" content="https://i.imgur.com/UJUYMh8.png" />
        <meta name="author" content="Hunter Macias"></meta>
        <meta property="og:url" content="https://hunter-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VisionCode:HM" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hunter Macias: Innovative Software Engineer & Tech Problem Solver" />
        <meta name="twitter:description" content="Dive into the portfolio of Hunter Macias, a passionate software engineer with a knack for tackling complex tech challenges. Discover a blend of cutting-edge projects showcasing expertise in AI, full-stack development, and cloud solutions. John's portfolio is not just a display of technical skills but a testament to a continuous journey of learning, innovation, and driving impact in the tech world." />
        <meta name="twitter:image" content="https://i.imgur.com/UJUYMh8.png" />
        <meta name="twitter:site" content="@HunterMacias_" />
        <meta name="twitter:creator" content="@HunterMacias_" />
      </Head>
      <body className="flex h-full flex-col " >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
