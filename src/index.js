import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import App from './components/app'

import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'

import Store from './store'

render(
	<Provider store={Store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
, document.getElementById('sri'));
registerServiceWorker();
