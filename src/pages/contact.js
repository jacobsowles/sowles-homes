import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';
import SEO from '../components/SEO';

const ContactPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
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

        <Image
          alt="interior"
          className="background"
          fluid={data.bannerImage.childImageSharp.fluid}
        />

        <Section banner>
          <h1>Contact Us</h1>

          <p>Get in touch with your questions and comments.</p>
        </Section>

        <Section center color="white" flex>
          <ul className="section-item-list">
            <li>
              <SectionItem icon={['fas', 'envelope']} title="Physical Mail">
                <p>
                  Please send checks and physical documents to the following
                  address:
                </p>

                <br />

                <blockquote>
                  <p>Sowles Homes</p>
                  <p>P.O. Box 66013</p>
                  <p>Portland, OR 97290</p>
                </blockquote>
              </SectionItem>
            </li>
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
