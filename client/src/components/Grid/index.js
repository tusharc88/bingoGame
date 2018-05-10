import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from '../Cell/index';

const GridWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  transition-property: transform box-shadow;
  &:hover {
    box-shadow: 0px 5px 5px 0px #aeb0b1;
    transform: translateY(-3px);
    transition: all 0.3s ease-in-out;
    transition-property: transform box-shadow;
  }
`;

const GridRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// TODO: Get currentNumber from express call,
// pass it to Cell using React Context Api
// Get child number for each cell using random number generator, save in redux
// check for number should not be repeated efficiently
export const Grid = ({ matrixNum }) => (
  <GridWrapper>
    {Array.from({ length: matrixNum }, (rowVal, rowKey) => (
      <GridRowWrapper key={rowKey}>
        {Array.from({ length: matrixNum }, (colVal, colKey) => (
          <Cell currentNumber={1} key={`${rowKey}-${colKey}`}>
            {1}
          </Cell>
        ))}
      </GridRowWrapper>
    ))}
  </GridWrapper>
);

Grid.propTypes = {
  matrixNum: PropTypes.number.isRequired,
};

export default Grid;
