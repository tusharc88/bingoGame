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

export const GridRow = ({ matrixNum, rowNum }) => {
  const cols = [];
  for (let i = 0; i < matrixNum; i += 1) {
    cols.push(
      <Cell currentNumber={1} key={`${rowNum}-${i}`}>
        {1}
      </Cell>
    );
  }

  return <GridRowWrapper>{cols}</GridRowWrapper>;
};

export const Grid = ({ matrixNum }) => {
  const rows = [];
  for (let i = 0; i < matrixNum; i += 1) {
    rows.push(<GridRow matrixNum={matrixNum} rowNum={i} key={i} />);
  }

  return <GridWrapper>{rows}</GridWrapper>;
};

GridRow.propTypes = {
  matrixNum: PropTypes.number.isRequired,
  rowNum: PropTypes.number.isRequired,
};

Grid.propTypes = {
  matrixNum: PropTypes.number.isRequired,
};

export default Grid;
