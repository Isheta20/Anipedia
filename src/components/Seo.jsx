import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../assets/Logo_tab.png";

const Seo = ({ title, description, name }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="ScS9u8BYMHNclTiLcAwDYi34IEWJL5ouH7LghWCDLnk"
      />

      {/* facebook tags */}
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://anipedia.tryntest.in/" />
      <meta property="og:image" content={logo} />

      {/* twitter tags */}
      <meta name="creator" content="Isheta Aggarwal" />
      <meta property="twitter:card" content="website" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
