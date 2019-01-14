import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';
import TextWithIcon from '../components/TextWithIcon';

const TenantsPage = () => (
  <Layout className="layout__tenants">
    <SEO description="" keywords={[]} title="Current Tenants" />

    <Section banner>
      <h1>Current Tenants</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut quis nisl mattis, blandit eros at, viverra purus.
      </p>
    </Section>

    <Section color="white" flex>
      <TextWithIcon
        icon={['fas', 'home']}
        text="Manage your home"
        url="https://home.cozy.co/#!/"
      />
      <p>Review your lease, make or schedule rent payments, and more.</p>

      <br />

      <TextWithIcon
        icon={['fas', 'tools']}
        text="Submit a maintenance request"
        url="https://home.cozy.co/app/#!/maintenance-requests/"
      />
      <p />
    </Section>
  </Layout>
);

export default TenantsPage;
