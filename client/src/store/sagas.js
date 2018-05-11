import { all, fork } from 'redux-saga/effects';
import { watchPopulateCards } from '../redux/bingoCards/sagas';
import { watchCheckBingo } from '../redux/checkBingo/sagas';
import { watchGetNextNumber } from '../redux/pastNumbers/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchPopulateCards),
    fork(watchCheckBingo),
    fork(watchGetNextNumber),
  ]);
}
