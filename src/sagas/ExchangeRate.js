import { takeEvery, put, call } from 'redux-saga/effects';

import ExchangeRateConstants from '../constants/ExchangeRateConstants';
import ExchangeRateRepository from '../repositories/ExchangeRateRepository';

const { GET_EXCHANGE_RATE } = ExchangeRateConstants;

export function* watchGetExchangeRate() {
	yield takeEvery(`${GET_EXCHANGE_RATE}_REQUEST`, function*() {
		try {
			const exchangeRate = yield call(ExchangeRateRepository.getExchangeRate);

			yield put({
				type: `${GET_EXCHANGE_RATE}_SUCCESS`,
				payload: exchangeRate
			});
		} catch (errors) {
			yield put({
				type: `${GET_EXCHANGE_RATE}_FAILURE`,
				payload: errors
			});
		}
	});
}
