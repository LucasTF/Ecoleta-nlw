import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

const Details = () => {
	const navigation = useNavigation();

	function navBackHandler() {
		navigation.goBack();
	}

	return (
		<>
			<Styled.Details>
				<TouchableOpacity onPress={navBackHandler}>
					<Icon name='arrow-left' size={24} color='#34cb79' />
				</TouchableOpacity>

				<Styled.CollectorImage
					source={{
						uri:
							'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
					}}
				></Styled.CollectorImage>

				<Styled.CollectorName>Mercado Teste</Styled.CollectorName>
				<Styled.CollectorItems>
					Lâmpadas, Óleo de Cozinha
				</Styled.CollectorItems>

				<Styled.Address>
					<Styled.AddressTitle>Endereço</Styled.AddressTitle>
					<Styled.AddressContent>
						São Paulo | SP
					</Styled.AddressContent>
				</Styled.Address>
			</Styled.Details>

			<Styled.Footer>
				<Styled.Button onPress={() => {}}>
					<FontAwesome name='whatsapp' size={20} color='#fff' />
					<Styled.ButtonText>Whatsapp</Styled.ButtonText>
				</Styled.Button>
				<Styled.Button onPress={() => {}}>
					<Icon name='mail' size={20} color='#fff' />
					<Styled.ButtonText>Email</Styled.ButtonText>
				</Styled.Button>
			</Styled.Footer>
		</>
	);
};

export default Details;
