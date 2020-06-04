import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../containers/Home';
import Collectors from '../containers/Collectors';
import Details from '../containers/Details';

const AppStack = createStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				headerMode='none'
				screenOptions={{
					cardStyle: {
						backgroundColor: '#f0f0f5',
					},
				}}
			>
				<AppStack.Screen name='Home' component={Home} />
				<AppStack.Screen name='Collectors' component={Collectors} />
				<AppStack.Screen name='Details' component={Details} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
