import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';
import SEO from '../components/SEO';

const ContactPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout
        background={data.bannerImage.childImageSharp.fluid}
        backgroundAlt="3 people with phones"
      >
        <SEO
          description="Contact Sowles Homes"
          keywords={[
            'contact',
            'email',
            'homes',
            'houses',
            'Jacob Sowles',
            'Kate Sowles',
            'phone',
            'real estate',
            'rental',
            'rent',
            'Sowles',
            'Sowles Homes',
            'Sowles Real Estate',
          ]}
          title="Contact Us"
        />

        <Section banner>
          <h1>Contact Us</h1>

          <p>Get in touch with your questions and comments.</p>
        </Section>

        <Section center color="white" flex>
          <ul className="section-item-list">
            <li>
              <SectionItem icon={['fas', 'at']} title="Email">
                <p>
                  Feel free to reach out to{' '}
                  <a href="mailto:info@sowleshomes.com">info@sowleshomes.com</a>
                  . Email is the fastest way to receive a response. We aim to
                  respond to all emails within one business day.
                </p>
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
    bannerImage: file(relativePath: { regex: "/3-women.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ContactPage;
