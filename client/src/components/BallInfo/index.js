import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BallInfoWrapper = styled.div`
  width: 100%;
`;

const BallInfo = ({ children, numberData, textData }) => (
  <BallInfoWrapper>{children(numberData, textData)}</BallInfoWrapper>
);

BallInfo.propTypes = {
  children: PropTypes.func.isRequired,
  numberData: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]).isRequired,
  textData: PropTypes.string.isRequired,
};

export default BallInfo;
