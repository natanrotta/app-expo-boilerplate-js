import React from 'react';
import PropTypes from 'prop-types';
import { IconStyled } from './styles';

const Icon = ({ name, size, color }) => {
  return <IconStyled name={name} size={size} color={color} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string.isRequired
};

export default Icon;
