import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgHome = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 32 32">
    <Svg.Path
      d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"
      fill={active ? colors.brandPrimary : colors.grey}
    />
  </Svg>
);

SvgHome.defaultProps = {
  active: false,
  size: 20
};

SvgHome.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgHome;
