import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";

//import PostList from "gatsby-theme-blog-core/src/components/post-list";

import styles from "./aboutus.module.css"

function IndexPage() {

  //const posts = data.allBlogPost.nodes

  return (
    <Layout>
      <SEO
        keywords={[`home`, `fintech`, `finanzas`, `personales`, `bancos`]}
        title="Educación financiera y comparador de servicios"
      />

     <section>
        <h1 className={styles.title}> Sobre nosotros </h1>
     </section>

    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default IndexPage;
