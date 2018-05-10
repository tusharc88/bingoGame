import React from 'react';
import styled from 'styled-components';
import Grid from '../../../../components/Grid/index';

const CardsGridWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 70%;
`;

const CardsGrid = () => (
  <CardsGridWrapper>
    <Grid matrixNum={5} />
    <Grid matrixNum={5} />
    <Grid matrixNum={5} />
    <Grid matrixNum={5} />
  </CardsGridWrapper>
);

export default CardsGrid;
