import axios from 'axios';

import { IP_ADDRESS } from '../environment';

const Axios = axios.create({
	baseURL: `http://${IP_ADDRESS}:3333`,
});

export default Axios;
