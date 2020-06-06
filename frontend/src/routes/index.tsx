import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../containers/Home';
import CreateCollector from '../containers/CreateCollector';

export const HOME = process.env.PUBLIC_URL + '/';
export const CREATE_COLLECTOR = process.env.PUBLIC_URL + '/create';

interface IRoutesProps {
	toggleTheme: () => void;
}

export const Routes: React.FC<IRoutesProps> = props => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					render={() => <CreateCollector {...props} />}
					path={CREATE_COLLECTOR}
				/>
				<Route render={() => <Home {...props} />} path={HOME} />
			</Switch>
		</BrowserRouter>
	);
};
