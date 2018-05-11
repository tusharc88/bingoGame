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
    {Array.from({ length: 4 }, (v, k) => <Grid matrixNum={5} key={k} />)}
  </CardsGridWrapper>
);

export default CardsGrid;
