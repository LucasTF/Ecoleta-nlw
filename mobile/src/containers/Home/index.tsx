import React from 'react';
import { Image, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import * as Styled from './styles';

const Home = () => {
	return (
		<Styled.Home
			source={require('../../assets/home-background.png')}
			imageStyle={{ width: 274, height: 368 }}
		>
			<Styled.Main>
				<Image source={require('../../assets/logo.png')} />
				<Styled.Title>
					Seu marketplace de coleta de resíduos
				</Styled.Title>
				<Styled.Description>
					Ajudamos pessoas a encontrarem pontos de coleta de forma
					eficiente.
				</Styled.Description>
			</Styled.Main>
			<Styled.Button onPress={() => {}}>
				<Styled.ButtonIcon>
					<Icon name='arrow-right' color='#FFF' size={24} />
				</Styled.ButtonIcon>
				<Styled.ButtonText>Entrar</Styled.ButtonText>
			</Styled.Button>
		</Styled.Home>
	);
};

export default Home;
