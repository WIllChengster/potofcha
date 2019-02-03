import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/hero';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero/>

    <h3>Why us?</h3>
  </Layout>
)

export default IndexPage
