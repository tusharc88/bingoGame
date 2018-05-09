import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BallInfo from '../index';
import Tag from '../../Tag/index';

const LastBallInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
`;

const LastBallTextWrapper = styled.div`
  font-size: ${props => `${props.dimension}px`};
  line-height: ${props => `${props.dimension * 2}px`};
  margin-right: 25px;
`;

const LastBall = ({ dimension, numberData, textData }) => (
  <BallInfo numberData={numberData} textData={textData}>
    {(number, textInfo) => (
      <LastBallInfoWrapper>
        <LastBallTextWrapper dimension={dimension}>
          {textInfo}
        </LastBallTextWrapper>
        <Tag hasBorder dimension={dimension}>
          {number}
        </Tag>
      </LastBallInfoWrapper>
    )}
  </BallInfo>
);

LastBall.propTypes = {
  dimension: PropTypes.number.isRequired,
  numberData: PropTypes.number.isRequired,
  textData: PropTypes.string.isRequired,
};

export default LastBall;
