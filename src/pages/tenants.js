import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';
import SEO from '../components/SEO';

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

    <Section center color="white" flex>
      <ul className="section-item-list">
        <li>
          <SectionItem
            icon={['fas', 'home']}
            subtitle="Manage your home via our tenant dashboard."
            title={<a href=" https://home.cozy.co/#!/">Dashboard</a>}
          />
        </li>

        <li>
          <SectionItem
            icon={['fas', 'tools']}
            subtitle="Submit a maintenance request for any problems with your home."
            title={
              <a href="https://home.cozy.co/app/#!/maintenance-requests/">
                Maintenance
              </a>
            }
          />
        </li>

        <li>
          <SectionItem
            icon={['fas', 'credit-card']}
            subtitle="Make a one-time payment, set up autopayments, and review past payments."
            title={<a href="https://home.cozy.co/app/#!/payments/">Payments</a>}
          />
        </li>

        <li>
          <SectionItem
            icon={['fas', 'at']}
            subtitle="Get in touch and we'll get back to you shortly."
            title={<Link to="/contact">Contact Us</Link>}
          />
        </li>
      </ul>
    </Section>
  </Layout>
);

export default TenantsPage;
