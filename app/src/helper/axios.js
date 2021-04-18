import axios from 'axios';
import store from '../redux/store/store';
import { logout } from '../redux/actions/auth';
import { message } from 'antd';

process.env.REACT_APP_ENV === 'production'
	? (axios.defaults.baseURL = 'http://185.66.71.54:8001/api/')
	: (axios.defaults.baseURL = 'http://localhost:33133/api/');

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			store.dispatch(logout());
		}
		message.error(error.response?.status);
		return Promise.reject(error);
	}
);

export default axios;
