import createReducer from '../lib/utils/CreateReducer';
import ExchangeRateConstants from '../constants/ExchangeRateConstants';

const { GET_EXCHANGE_RATE } = ExchangeRateConstants;

export const getInitialState = () => ({
	loading: false,
	errors: {},
	exchangeRate: {}
});

export default createReducer(getInitialState, {
	[`${GET_EXCHANGE_RATE}_REQUEST`]: () => ({
		loading: true,
		errors: {}
	}),
	[`${GET_EXCHANGE_RATE}_SUCCESS`]: (state, { payload: exchangeRate }) => ({
		loading: false,
		exchangeRate
}),
	[`${GET_EXCHANGE_RATE}_FAILURE`]: (state, { payload: error }) => ({
		loading: false,
		error
	})
});
