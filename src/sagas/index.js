import { fork, all } from 'redux-saga/effects';

import { watchGetExchangeRate } from './ExchangeRate';

export default function* root() {
  yield all([fork(watchGetExchangeRate)]);
}
