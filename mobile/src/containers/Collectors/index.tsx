import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import * as Styled from './styles';

const Collectors = () => {
	const navigation = useNavigation();

	function navBackHandler() {
		navigation.goBack();
	}

	function navToDetailHandler() {
		navigation.navigate('Details');
	}

	return (
		<>
			<Styled.Collectors>
				<TouchableOpacity onPress={navBackHandler}>
					<Icon name='arrow-left' size={24} color='#34cb79' />
				</TouchableOpacity>

				<Styled.Title>Bem vindo.</Styled.Title>
				<Styled.Description>
					Encontre no mapa um ponto de coleta.
				</Styled.Description>

				<Styled.MapContainer>
					<Styled.Map
						initialRegion={{
							latitude: -23.5468789,
							longitude: -46.6271679,
							latitudeDelta: 0.1,
							longitudeDelta: 0.1,
						}}
					>
						<Styled.MapMarker
							onPress={navToDetailHandler}
							coordinate={{
								latitude: -23.5468789,
								longitude: -46.6271679,
							}}
						>
							<Styled.MapMarkerContainer>
								<Styled.MapMarkerImage
									resizeMode='cover'
									source={{
										uri:
											'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
									}}
								/>
								<Styled.MapMarkerTitle>
									Mercado
								</Styled.MapMarkerTitle>
							</Styled.MapMarkerContainer>
							<Styled.ArrowDown />
						</Styled.MapMarker>
					</Styled.Map>
				</Styled.MapContainer>
			</Styled.Collectors>

			<Styled.ItemsContainer>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<Styled.Item onPress={() => {}}>
						<SvgUri
							width={42}
							height={42}
							uri={'http://192.168.0.10:3333/assets/lampadas.svg'}
						/>
						<Styled.ItemTitle>Lâmpadas</Styled.ItemTitle>
					</Styled.Item>
					<Styled.Item onPress={() => {}}>
						<SvgUri
							width={42}
							height={42}
							uri={'http://192.168.0.10:3333/assets/lampadas.svg'}
						/>
						<Styled.ItemTitle>Lâmpadas</Styled.ItemTitle>
					</Styled.Item>
					<Styled.Item onPress={() => {}}>
						<SvgUri
							width={42}
							height={42}
							uri={'http://192.168.0.10:3333/assets/lampadas.svg'}
						/>
						<Styled.ItemTitle>Lâmpadas</Styled.ItemTitle>
					</Styled.Item>
					<Styled.Item onPress={() => {}}>
						<SvgUri
							width={42}
							height={42}
							uri={'http://192.168.0.10:3333/assets/lampadas.svg'}
						/>
						<Styled.ItemTitle>Lâmpadas</Styled.ItemTitle>
					</Styled.Item>
					<Styled.Item onPress={() => {}}>
						<SvgUri
							width={42}
							height={42}
							uri={'http://192.168.0.10:3333/assets/lampadas.svg'}
						/>
						<Styled.ItemTitle>Lâmpadas</Styled.ItemTitle>
					</Styled.Item>
					<Styled.Item onPress={() => {}}>
						<SvgUri
							width={42}
							height={42}
							uri={'http://192.168.0.10:3333/assets/lampadas.svg'}
						/>
						<Styled.ItemTitle>Lâmpadas</Styled.ItemTitle>
					</Styled.Item>
				</ScrollView>
			</Styled.ItemsContainer>
		</>
	);
};

export default Collectors;
