import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {combinedReducers} from './redux/reducers/combinedReducers';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

const store = createStore(combinedReducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
