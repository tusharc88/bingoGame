import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '../../../../components/Grid/index';
import Button from '../../../../components/Button/index';

const CardPalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardPallet = ({ cardNumbers }) => (
  <CardPalletWrapper>
    <Grid matrixNum={5} cardNumbers={cardNumbers} />
    <Button>Check Bingo</Button>
  </CardPalletWrapper>
);

CardPallet.propTypes = {
  cardNumbers: PropTypes.array.isRequired,
};

export default CardPallet;
