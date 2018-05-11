import React from 'react';
import styled from 'styled-components';
import Header from './containers/header/index';
import CardGrid from './containers/CardGrid/index';

const BingoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bingo = () => (
  <BingoWrapper>
    <Header />
    <CardGrid />
  </BingoWrapper>
);

export default Bingo;
