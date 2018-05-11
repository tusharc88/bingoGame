import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import CardPallet from '../../components/CardPallet/index';
import { populateCards } from '../../../../redux/bingoCards/actions';
import { selectBingoCard } from '../../../../redux/bingoCards/selectors';

const CardsGridWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 70%;
`;

class CardsGrid extends Component {
  static propTypes = {
    populateCards: PropTypes.func.isRequired,
    bingoCardOne: PropTypes.array.isRequired,
    bingoCardTwo: PropTypes.array.isRequired,
    bingoCardThree: PropTypes.array.isRequired,
    bingoCardFour: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.populateCards();
  }

  render() {
    const {
      bingoCardOne,
      bingoCardTwo,
      bingoCardThree,
      bingoCardFour,
    } = this.props;
    return (
      <CardsGridWrapper>
        <CardPallet cardNumbers={bingoCardOne} />
        <CardPallet cardNumbers={bingoCardTwo} />
        <CardPallet cardNumbers={bingoCardThree} />
        <CardPallet cardNumbers={bingoCardFour} />
      </CardsGridWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  bingoCardOne: selectBingoCard(0),
  bingoCardTwo: selectBingoCard(1),
  bingoCardThree: selectBingoCard(2),
  bingoCardFour: selectBingoCard(3),
});

const mapDispatchToProps = dispatch => ({
  populateCards: () => dispatch(populateCards.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsGrid);
