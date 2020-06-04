import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Dosis_400Regular, Dosis_500Medium } from '@expo-google-fonts/dosis';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
	const [fontsLoaded] = useFonts({
		Dosis_400Regular,
		Dosis_500Medium,
		Ubuntu_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				translucent
			/>
			<Routes />
		</>
	);
}
