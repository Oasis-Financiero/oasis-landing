import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import facebook from "../images/social/facebook.svg";
import twitter from "../images/social/twitter.svg";
import linkedin from "../images/social/linkedin.svg";
import medium from "../images/social/medium.svg";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 pt-8 pb-8 mx-auto md:py-16">
        {children}
      </main>

      <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl px-4 pb-4 pt-8 mx-auto text-sm md:px-8">
          <p className="text-white">
            &copy; Oasis Financiero 2020{` `}
            <a
              className="font-bold no-underline"
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aviso de Privacidad
            </a>
          </p>
        </nav>
        <nav className="social-media max-w-4xl mx-auto px-4 pt-4 pb-8 text-sm md:px-8">

          <p className='follow-text text-white pb-4'>
            Siguenos en redes sociales:
          </p>

          <div className='icons-tray'>

              <a
                className="font-bold text-white no-underline"
                href="https://facebook.com/oasisfinanciero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Young, tech-savvy person"
                  className="social-icon"
                  src={facebook}
                />
              </a>

              <a
                className="font-bold text-white no-underline"
                href="https://twitter.com/blockchainoasis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Young, tech-savvy person"
                  className="social-icon"
                  src={twitter}
                />
              </a>

              <a
                className="font-bold text-white no-underline"
                href="https://linkedin.com/company/oasis-blockchain-tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Young, tech-savvy person"
                  className="social-icon"
                  src={linkedin}
                />
              </a>

              <a
                className="font-bold text-white no-underline"
                href="https://medium.com/@oasisfinancierotech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Young, tech-savvy person"
                  className="social-icon"
                  src={medium}
                />
              </a>

          </div>
        </nav>

      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
