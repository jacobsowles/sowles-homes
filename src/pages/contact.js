import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';
import TextWithIcon from '../components/TextWithIcon';

const ContactPage = () => (
  <Layout className="layout__contact">
    <SEO description="" keywords={[]} title="Contact Us" />

    <Section banner>
      <h1>Contact Us</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut quis nisl mattis, blandit eros at, viverra purus.
      </p>
    </Section>

    <Section color="white" flex>
      <TextWithIcon icon={['fas', 'map-marker-alt']} text="Physical Mail" />
      <p>Please send checks and physical documents to the following address:</p>

      <br />

      <p>Sowles Homes</p>
      <p>P.O. Box 66013</p>
      <p>Portland, OR 97290</p>

      <br />

      <TextWithIcon icon={['fas', 'envelope']} text="Email" />
      <p>
        Feel free to reach out to{' '}
        <a href="mailto:info@sowleshomes.com">info@sowleshomes.com</a>. Email is
        the fastest way to receive a response. We aim to respond to all emails
        within one business day.
      </p>
    </Section>
  </Layout>
);

export default ContactPage;
