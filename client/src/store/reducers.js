import { combineReducers } from 'redux';
import bingoCards from '../redux/bingoCards/reducer';
import pastNumbers from '../redux/pastNumbers/reducer';
import checkBingo from '../redux/checkBingo/reducer';

const rootReducer = combineReducers({
  pastNumbers,
  bingoCards,
  checkBingo,
});

export default rootReducer;
