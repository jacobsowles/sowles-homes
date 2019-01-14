import PropTypes from 'prop-types';
import React from 'react';

import './RentalListing.scss';

const RentalListing = ({
  address,
  baths,
  beds,
  children,
  city,
  link,
  size,
  state,
  zip,
}) => (
  <div className="rental-listing">
    <a href={link}>
      {children}
      <div className="rental-listing-overlay">
        <p>{`${beds} bed, ${baths} bath, ${size} sqft`}</p>
        <small>{`${address}, ${city}, ${state} ${zip}`}</small>
      </div>
    </a>
  </div>
);

RentalListing.propTypes = {
  address: PropTypes.string.isRequired,
  baths: PropTypes.string.isRequired,
  beds: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
};

export default RentalListing;
