import { Link } from 'gatsby';
import React from 'react';

import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO
      description=""
      keywords={[`gatsby`, `application`, `react`]}
      title="Home"
    />
  </Layout>
);

export default IndexPage;
