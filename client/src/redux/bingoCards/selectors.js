import { createSelector } from 'reselect';

export const selectBingoCards = ({ bingoCards }) => bingoCards;

export const selectBingoCard = cardNumber =>
  createSelector(selectBingoCards, cards => cards[cardNumber]);
