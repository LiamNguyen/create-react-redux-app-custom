import config from '../config';

export default {
  get base() {
    return config.apiHost;
  },

  getExchangeRate() {
    return `${this.base}/latest`
  }
};
