import { takeEvery, call } from 'redux-saga/effects';
import { callGetNextNumber, getNextNumber, watchGetNextNumber } from './sagas';
import { generateUniqueRandomNumber } from '../../util/index';

test('getNextNumber', () => {
  const generator = getNextNumber([1, 2, 5, 7, 8, 21, 31, 3, 9, 91]);

  expect(generator.next().value).toEqual(
    call(generateUniqueRandomNumber, [1, 2, 5, 7, 8, 21, 31, 3, 9, 91])
  );

  expect(generator.next(4).value.PUT.action.payload).toEqual(4);
});

test('watchGetNextNumber', () => {
  const generator = watchGetNextNumber();
  expect(generator.next().value).toEqual(
    takeEvery('NEXT_NUMBER_REQUEST', callGetNextNumber)
  );
});
