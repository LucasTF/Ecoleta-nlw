import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../containers/Home';
import CreateCollector from '../containers/CreateCollector';

export const HOME = process.env.PUBLIC_URL + '/';
export const CREATE_COLLECTOR = process.env.PUBLIC_URL + '/create';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={CreateCollector} path={CREATE_COLLECTOR} />
				<Route component={Home} path={HOME} />
			</Switch>
		</BrowserRouter>
	);
};
