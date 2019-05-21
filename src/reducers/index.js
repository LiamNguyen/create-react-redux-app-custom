import { combineReducers } from 'redux';

import Sample from './SampleReducer';
import ExchangeRate from './ExchangeRateReducer';

export default combineReducers({
  Sample,
  ExchangeRate
});
