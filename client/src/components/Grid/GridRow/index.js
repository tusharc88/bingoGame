import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from '../../Cell/index';

const GridRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GridRow = ({ matrixNum, rowNum }) => {
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

GridRow.propTypes = {
  matrixNum: PropTypes.number.isRequired,
  rowNum: PropTypes.number.isRequired,
};

export default GridRow;
