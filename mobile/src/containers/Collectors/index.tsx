import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import { SvgUri } from 'react-native-svg';

import Axios from '../../utils/axios';
import * as Styled from './styles';

interface IItem {
	id: number;
	title: string;
	imageUrl: string;
}

interface ICollector {
	id: number;
	name: string;
	image: string;
	image_url: string;
	latitude: string;
	longitude: string;
}

interface IRouteParams {
	uf: string;
	city: string;
}

const Collectors = () => {
	const [items, setItems] = useState<IItem[]>([]);
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [collectors, setCollectors] = useState<ICollector[]>([]);

	const [initialPosition, setInitialPosition] = useState<[number, number]>([
		0,
		0,
	]);

	useEffect(() => {
		async function loadPosition() {
			const { status } = await Location.requestPermissionsAsync();

			if (status !== 'granted') {
				Alert.alert(
					'Ops...',
					'Precisamos de sua permissão para obter a localização.'
				);
				return;
			}

			const location = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;

			setInitialPosition([latitude, longitude]);
		}

		loadPosition();
	}, []);

	useEffect(() => {
		Axios.get('items')
			.then(res => {
				setItems(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		Axios.get('collectors', {
			params: {
				city: routeParams.city,
				uf: routeParams.uf,
				items: selectedItems,
			},
		}).then(res => {
			setCollectors(res.data);
		});
	}, [selectedItems]);

	const navigation = useNavigation();
	const route = useRoute();

	const routeParams = route.params as IRouteParams;

	function navBackHandler() {
		navigation.goBack();
	}

	function navToDetailHandler(id: number) {
		navigation.navigate('Details', { point_id: id });
	}

	function selectItemHandler(id: number) {
		const itemIndex = selectedItems.findIndex(item => item === id);
		if (itemIndex === -1) {
			setSelectedItems([...selectedItems, id]);
		} else {
			const filteredItems = selectedItems.filter(item => item !== id);
			setSelectedItems(filteredItems);
		}
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
					{initialPosition[0] !== 0 && (
						<Styled.Map
							initialRegion={{
								latitude: initialPosition[0],
								longitude: initialPosition[1],
								latitudeDelta: 0.1,
								longitudeDelta: 0.1,
							}}
						>
							{collectors.map(collector => (
								<Styled.MapMarker
									key={String(collector.id)}
									onPress={() =>
										navToDetailHandler(collector.id)
									}
									coordinate={{
										latitude: Number(collector.latitude),
										longitude: Number(collector.longitude),
									}}
								>
									<Styled.MapMarkerContainer>
										<Styled.MapMarkerImage
											resizeMode='cover'
											source={{
												uri: collector.image_url,
											}}
										/>
										<Styled.MapMarkerTitle>
											{collector.name}
										</Styled.MapMarkerTitle>
									</Styled.MapMarkerContainer>
									<Styled.ArrowDown />
								</Styled.MapMarker>
							))}
						</Styled.Map>
					)}
				</Styled.MapContainer>
			</Styled.Collectors>

			<Styled.ItemsContainer>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{items.map(item => (
						<Styled.Item
							key={String(item.id)}
							activeOpacity={0.6}
							onPress={() => selectItemHandler(item.id)}
							selected={selectedItems.includes(item.id)}
						>
							<SvgUri
								width={42}
								height={42}
								uri={item.imageUrl}
							/>
							<Styled.ItemTitle>{item.title}</Styled.ItemTitle>
						</Styled.Item>
					))}
				</ScrollView>
			</Styled.ItemsContainer>
		</>
	);
};

export default Collectors;
