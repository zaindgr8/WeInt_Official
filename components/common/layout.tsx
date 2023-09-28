

import Head from "next/head";
import { METADATA } from "../../constants";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
      <title>We Int | Official</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="We Grow Together" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="We International Digital Marketing" />
        <meta property="og:description" content="We Grow Together" />
        <meta property="og:url" content="We International Digital Marketing" />
        <meta property="og:site_name" content="We International Digital Marketing" />
        
        <meta property="og:image:secure_url" content="We International" />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" type="image/x-icon" href="/welogo1.png" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
