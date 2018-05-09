import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BallInfo from '../index';
import Tag from '../../Tag/index';

const PreviousBallsInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PreviousBallsTextWrapper = styled.div`
  font-size: ${props => `${props.dimension} px`}
  width: 95%;
`;

const PreviousBallsNumberDataWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const PreviousBalls = ({ dimension, numData, textVal }) => (
  <BallInfo numberData={numData} textData={textVal}>
    {(numberArray, textInfo) => (
      <PreviousBallsInfoWrapper>
        <PreviousBallsTextWrapper dimension={dimension}>
          {textInfo}
        </PreviousBallsTextWrapper>
        <PreviousBallsNumberDataWrapper>
          {numberArray.map(num => <Tag dimension={dimension}>{num}</Tag>)}
        </PreviousBallsNumberDataWrapper>
      </PreviousBallsInfoWrapper>
    )}
  </BallInfo>
);

PreviousBalls.propTypes = {
  dimension: PropTypes.number.isRequired,
  numData: PropTypes.arrayOf(PropTypes.number).isRequired,
  textVal: PropTypes.string.isRequired,
};

export default PreviousBalls;