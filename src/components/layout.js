import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer"
import CookieConsentBanner from "./styled/CookiesBanner/CookieConsentBanner";

function Layout({ children }) {

  /* let colWidthStyle;

  switch(page) {
    case "blog":
      colWidthStyle = "max-w-none pt-12 px-4 md:px-16";
      break;
    case "blogpost":
      colWidthStyle = "max-w-3xl md:py-16 px-4";
      break;
    case "newlanding":
      colWidthStyle = "max-w-none";
      break;
    default:
      colWidthStyle = "max-w-4xl md:py-16 px-4";
  } */

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 w-full">
      <Header />
      
        <CookieConsentBanner />
      
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
