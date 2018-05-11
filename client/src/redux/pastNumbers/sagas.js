import { takeEvery, call, put } from 'redux-saga/effects';
import { getNextNumber as getNextNumberAction } from './actions';
import { generateUniqueRandomNumber } from '../../util/index';

export function* getNextNumber(pastNumbers) {
  const uniqueRandomNumber = yield call(
    generateUniqueRandomNumber,
    pastNumbers
  );

  yield put(getNextNumberAction.success(uniqueRandomNumber));
}

export const callGetNextNumber = action => getNextNumber(action.payload);

export function* watchGetNextNumber() {
  yield takeEvery('NEXT_NUMBER_REQUEST', callGetNextNumber);
}
