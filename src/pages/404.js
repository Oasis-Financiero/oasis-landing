import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";
import styles from "./404.module.css";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div id={styles.notFoundBody}>
        <div id={styles.notFoundContainer}>
          <img
            alt="Ghost getting abducted by aliens"
            className="block mx-auto w-1/2"
            src={abductionIllustration}
          />
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </h2>
        </div> 
      </div>
    </Layout>
  );
}

export default NotFoundPage;
