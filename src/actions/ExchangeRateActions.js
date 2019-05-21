import ExchangeRateConstants from '../constants/ExchangeRateConstants';

const { GET_EXCHANGE_RATE } = ExchangeRateConstants;

export const getExchangeRate = () => ({
    type: `${GET_EXCHANGE_RATE}_REQUEST`
});

export default {
    getExchangeRate
};
