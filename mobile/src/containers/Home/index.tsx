import React, { useState, useEffect } from 'react';
import { Image, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import Select from '../../components/Select';
import * as Styled from './styles';

interface IUfResponse {
	sigla: string;
}

interface ICityResponse {
	nome: string;
}

const Home = () => {
	const [ufs, setUfs] = useState<string[]>([]);
	const [cities, setCities] = useState<string[]>([]);
	const [selectedUf, setSelectedUf] = useState<string>('0');
	const [selectedCity, setSelectedCity] = useState<string>('0');

	useEffect(() => {
		axios
			.get<IUfResponse[]>(
				'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
			)
			.then(res => {
				const initials = res.data.map(uf => uf.sigla);
				setUfs(initials);
			})
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		if (selectedUf === '0') {
			setCities([]);
			return;
		}

		axios
			.get<ICityResponse[]>(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
			)
			.then(res => setCities(res.data.map(city => city.nome)))
			.catch(err => console.log(err));
	}, [selectedUf]);

	const navigation = useNavigation();

	function navToCollectorsPageHandler() {
		if (selectedCity === '0') {
			Alert.alert(
				'Aviso',
				'Por favor, selecione uma UF e uma cidade antes de continuar.'
			);
			return;
		}
		navigation.navigate('Collectors', {
			uf: selectedUf,
			city: selectedCity,
		});
	}

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

			<Select
				title='Selecione uma UF'
				onValueChange={(value: string) => setSelectedUf(value)}
				items={ufs.map(uf => {
					return { label: uf, value: uf };
				})}
			/>

			<Select
				title='Selecione uma cidade'
				onValueChange={(value: string) => setSelectedCity(value)}
				items={cities.map(city => {
					return { label: city, value: city };
				})}
			/>

			<Styled.Button onPress={navToCollectorsPageHandler}>
				<Styled.ButtonIcon>
					<Icon name='arrow-right' color='#FFF' size={24} />
				</Styled.ButtonIcon>
				<Styled.ButtonText>Entrar</Styled.ButtonText>
			</Styled.Button>
		</Styled.Home>
	);
};

export default Home;
