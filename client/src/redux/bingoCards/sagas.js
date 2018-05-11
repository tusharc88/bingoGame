import { takeEvery, select, put, all } from 'redux-saga/effects';
import { selectBingoCards } from './selectors';
import { populateCards } from './actions';
import { generateBingoCardNumbers } from '../../util/index';

export function* populateBingoCards() {
  const cards = yield select(selectBingoCards);
  const cardsWithNumbers = yield all(
    Object.keys(cards).map(cardNumber =>
      generateBingoCardNumbers(5, cardNumber)
    )
  );

  yield put(populateCards.success(cardsWithNumbers));
}

export function* watchPopulateCards() {
  yield takeEvery('POPULATE_CARDS_REQUEST', populateBingoCards);
}
