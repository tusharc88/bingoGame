import { takeEvery, call } from 'redux-saga/effects';
import { callCheckBingo, checkIsBingo, watchCheckBingo } from './sagas';
import { isBingo } from '../../util/index';

test('checkIsBingo', () => {
  const generator = checkIsBingo(0);

  const dummyPastNumbers = [1, 2, 5, 7, 8, 21, 31, 3, 9, 91, 12, 29, 45, 30];
  const dummyFilledCard = [1, 5, 7, 8, 3, 9, 12, 29, 30];

  expect(generator.next().value).toMatchSnapshot();
  expect(generator.next(dummyFilledCard).value).toMatchSnapshot();
  expect(generator.next(dummyPastNumbers).value).toEqual(
    call(isBingo, dummyPastNumbers, dummyFilledCard)
  );
  expect(generator.next(true).value.PUT.action.payload).toEqual(true);
});

test('watchCheckBingo', () => {
  const generator = watchCheckBingo();
  expect(generator.next().value).toEqual(
    takeEvery('CHECK_BINGO_REQUEST', callCheckBingo)
  );
});
