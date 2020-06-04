import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import * as Styled from './styles';

const Collectors = () => {
	const navigation = useNavigation();

	function navBackHandler() {
		navigation.goBack();
	}

	return (
		<>
			<Styled.Collectors>
				<TouchableOpacity>
					<Icon
						name='arrow-left'
						size={20}
						color='#34cb79'
						onPress={navBackHandler}
					/>
				</TouchableOpacity>

				<Styled.Title>Bem vindo.</Styled.Title>
				<Styled.Description>
					Encontre no mapa um ponto de coleta.
				</Styled.Description>

				<Styled.MapContainer>
					<Styled.Map />
				</Styled.MapContainer>
			</Styled.Collectors>
			<Styled.ItemsContainer>
				<Styled.Item onPress={() => {}}>
					<SvgUri width={42} height={42} uri={''} />
				</Styled.Item>
			</Styled.ItemsContainer>
		</>
	);
};

export default Collectors;
