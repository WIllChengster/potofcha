import React from 'react';

import Layout from "../components/layout";
import SEO from '../components/seo';

import Drink from '../components/drink'

const menu = () => (
  <Layout>
    <SEO title="Menu" />
    <h1>Featured Drinks</h1>
    <div style={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-evenly'
      }} 
    >
      <Drink/>
      <Drink/>
      <Drink/>
      <Drink/>
    </div>

    <h1>Categories</h1>
    <div>
      
    </div>

  </Layout>
)


export default menu

