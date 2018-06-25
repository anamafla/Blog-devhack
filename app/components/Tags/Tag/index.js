import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, description }) => (
  <div>
    <span>{name}</span>
    <span>{description}</span>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Tag.defaultProps = {
  description: 'This tag has no description',
};

export default Tag;
