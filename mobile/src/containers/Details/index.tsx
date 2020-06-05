import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import Axios from '../../utils/axios';
import * as Styled from './styles';

interface IParams {
	point_id: number;
}

interface IData {
	collector: {
		image: string;
		image_url: string;
		name: string;
		email: string;
		whatsapp: string;
		city: string;
		uf: string;
	};
	items: {
		title: string;
	}[];
}

const Details = () => {
	const [data, setData] = useState<IData>({} as IData);

	const navigation = useNavigation();
	const route = useRoute();

	const routeParams = route.params as IParams;

	useEffect(() => {
		Axios.get(`collectors/${routeParams.point_id}`).then(res => {
			setData(res.data);
		});
	}, []);

	function navBackHandler() {
		navigation.goBack();
	}

	function whatsappHandler() {
		Linking.openURL(
			`whatsapp://send?phone=${data.collector.whatsapp}&Text=Tenho interesse sobre a coleta de resíduos`
		);
	}

	function emailHandler() {
		MailComposer.composeAsync({
			subject: 'Interesse na coleta de resíduos',
			recipients: [data.collector.email],
		});
	}

	if (!data.collector) {
		return null;
	}

	return (
		<>
			<Styled.Details>
				<TouchableOpacity onPress={navBackHandler}>
					<Icon name='arrow-left' size={24} color='#34cb79' />
				</TouchableOpacity>

				<Styled.CollectorImage
					source={{
						uri: data.collector.image_url,
					}}
				></Styled.CollectorImage>

				<Styled.CollectorName>
					{data.collector.name}
				</Styled.CollectorName>
				<Styled.CollectorItems>
					{data.items.map(item => item.title).join(', ')}
				</Styled.CollectorItems>

				<Styled.Address>
					<Styled.AddressTitle>Endereço</Styled.AddressTitle>
					<Styled.AddressContent>
						{`${data.collector.city}, ${data.collector.uf}`}
					</Styled.AddressContent>
				</Styled.Address>
			</Styled.Details>

			<Styled.Footer>
				<Styled.Button onPress={whatsappHandler}>
					<FontAwesome name='whatsapp' size={20} color='#fff' />
					<Styled.ButtonText>Whatsapp</Styled.ButtonText>
				</Styled.Button>
				<Styled.Button onPress={emailHandler}>
					<Icon name='mail' size={20} color='#fff' />
					<Styled.ButtonText>Email</Styled.ButtonText>
				</Styled.Button>
			</Styled.Footer>
		</>
	);
};

export default Details;
