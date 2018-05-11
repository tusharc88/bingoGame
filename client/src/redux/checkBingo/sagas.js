import { takeEvery, select, put, call } from 'redux-saga/effects';
import { selectBingoCard } from '../bingoCards/selectors';
import { selectPastNumbers } from '../pastNumbers/selectors';
import { isBingo as isBingoAction } from './actions';
import { isBingo } from '../../util/index';

export function* checkIsBingo(cardNum) {
  const bingoCard = yield select(selectBingoCard(cardNum));
  const pastNumbers = yield select(selectPastNumbers);
  const isBingoResult = yield call(isBingo, pastNumbers, bingoCard);

  yield put(isBingoAction.success(isBingoResult));
}

export const callCheckBingo = action => checkIsBingo(action.payload);

export function* watchCheckBingo() {
  yield takeEvery('CHECK_BINGO_REQUEST', callCheckBingo);
}
