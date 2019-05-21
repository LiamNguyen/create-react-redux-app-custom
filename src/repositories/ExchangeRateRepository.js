import routes from '../lib/ApiRoutes';
import { checkResponse, get } from '../lib/FetchHelper';

export default {
	getExchangeRate() {
		return get(routes.getExchangeRate()).then(checkResponse);
	}
};
