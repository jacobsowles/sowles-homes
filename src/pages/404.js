import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO description="Page not found" title="Not found" />

    <Section banner>
      <h1>Not Found</h1>
      <p>The page you requested has either moved or doesn't exist.</p>
    </Section>
  </Layout>
);

export default NotFoundPage;
