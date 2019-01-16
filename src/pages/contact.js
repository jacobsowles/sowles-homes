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
        style={{
          backgroundImage: `url(${data.bannerImage.childImageSharp.fluid.src})`,
        }}
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

          <p>
            Get in touch with your questions and comments. We'll reach out to
            you as soon as possible.
          </p>
        </Section>

        <Section center color="white" flex>
          <ul className="section-item-list">
            <li>
              <SectionItem
                icon={['fas', 'envelope']}
                subtitle={
                  <>
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
                  </>
                }
                title="Physical Mail"
              />
            </li>
            <li>
              <SectionItem
                icon={['fas', 'at']}
                subtitle={
                  <p>
                    Feel free to reach out to{' '}
                    <a href="mailto:info@sowleshomes.com">
                      info@sowleshomes.com
                    </a>
                    . Email is the fastest way to receive a response. We aim to
                    respond to all emails within one business day.
                  </p>
                }
                title="Email"
              />
            </li>
          </ul>
        </Section>
      </Layout>
    )}
  />
);

const query = graphql`
  query {
    bannerImage: file(relativePath: { regex: "/contact.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ContactPage;
