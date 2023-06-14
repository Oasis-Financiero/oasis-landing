import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";
import * as styles from "./404.module.css";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div id={styles.notFoundBody}>
        <div id={styles.notFoundContainer}>
          <img
            alt="Ghost getting abducted by aliens"
            className="block mx-auto w-3/4"
            src={abductionIllustration}
          />
          <h2 id={styles.notFoundMsg}>
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </h2>
        </div> 
      </div>
    </Layout>
  );
}

export default NotFoundPage;
