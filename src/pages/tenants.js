import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';
import SEO from '../components/SEO';

const TenantsPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout
        style={{
          backgroundImage: `url(${data.bannerImage.childImageSharp.fluid.src})`,
        }}
      >
        <SEO
          description="Tools for current tenants"
          keywords={[
            'homes',
            'houses',
            'Jacob Sowles',
            'Kate Sowles',
            'real estate',
            'rental',
            'rent',
            'Sowles',
            'Sowles Homes',
            'Sowles Real Estate',
            'tenants',
            'tools',
          ]}
          title="Current Tenants"
        />

        <Section banner>
          <h1>Current Tenants</h1>

          <p>
            If you're already a tenant with us, use the links below to manage
            your home.
          </p>
        </Section>

        <Section center color="white" flex>
          <ul className="section-item-list">
            <li>
              <SectionItem
                icon={['fas', 'home']}
                linkUrl="https://home.cozy.co/#!/"
                title={<p className="brand">Dashboard</p>}
              >
                <p>Manage your home via our tenant dashboard.</p>
              </SectionItem>
            </li>

            <li>
              <SectionItem
                icon={['fas', 'tools']}
                linkUrl="https://home.cozy.co/app/#!/maintenance-requests/"
                title={<p className="brand">Maintenance</p>}
              >
                <p>
                  Submit a maintenance request for any problems with your home.
                </p>
              </SectionItem>
            </li>

            <li>
              <SectionItem
                icon={['fas', 'credit-card']}
                linkUrl="https://home.cozy.co/app/#!/payments/"
                title={<p className="brand">Payments</p>}
              >
                <p>
                  Make a one-time payment, set up autopayments, and review past
                  payments.
                </p>
              </SectionItem>
            </li>

            <li>
              <SectionItem
                icon={['fas', 'at']}
                linkUrl="/contact/"
                title={<p className="brand">Contact Us</p>}
              >
                <p>Get in touch and we'll get back to you shortly.</p>
              </SectionItem>
            </li>
          </ul>
        </Section>
      </Layout>
    )}
  />
);

const query = graphql`
  query {
    bannerImage: file(relativePath: { regex: "/dinner-party.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default TenantsPage;
