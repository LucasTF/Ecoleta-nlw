import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';

import Maps from '../../components/Maps';
import Dropzone from '../../components/Dropzone';
import Backdrop from '../../components/Backdrop';
import ToggleButton from '../../components/ToggleButton';
import Axios from '../../utils/axios';
import { HOME } from '../../routes';
import { StyledCreateCollector } from './styles';

import logo from '../../assets/svg/logo.svg';

interface IItem {
	id: number;
	title: string;
	imageUrl: string;
}

interface IUfResponse {
	sigla: string;
}

interface ICityResponse {
	nome: string;
}

interface ICreateCollectorProps {
	toggleTheme: () => void;
}

const CreateCollector: React.FC<ICreateCollectorProps> = ({ toggleTheme }) => {
	const [items, setItems] = useState<IItem[]>([]);
	const [ufs, setUfs] = useState<string[]>([]);
	const [cities, setCities] = useState<string[]>([]);

	const [selectedUf, setSelectedUf] = useState('0');
	const [selectedCity, setSelectedCity] = useState('0');
	const [selectedPosition, setSelectedPosition] = useState<
		[number, number] | null
	>(null);
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [selectedImage, setSelectedImage] = useState<File>();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		whatsapp: '',
	});

	const [submited, setSubmited] = useState(false);

	const history = useHistory();

	useEffect(() => {
		Axios.get('items')
			.then(res => {
				setItems(res.data);
			})
			.catch(err => console.log(err));
	}, []);

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

	useEffect(() => {
		if (submited) {
			setTimeout(() => {
				history.push('/');
			}, 4000);
		}
	}, [submited, history]);

	function selectedUfHandler(event: ChangeEvent<HTMLSelectElement>) {
		setSelectedUf(event.target.value);
	}

	function selectedCityHandler(event: ChangeEvent<HTMLSelectElement>) {
		setSelectedCity(event.target.value);
	}

	function mapClickHandler(event: LeafletMouseEvent) {
		setSelectedPosition([event.latlng.lat, event.latlng.lng]);
	}

	function inputChangedHandler(event: ChangeEvent<HTMLInputElement>) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
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

	async function formSubmitHandler(event: FormEvent) {
		event.preventDefault();

		const data = new FormData();

		data.append('name', formData.name);
		data.append('email', formData.email);
		data.append('whatsapp', formData.whatsapp);
		data.append('latitude', String(selectedPosition?.[0]));
		data.append('longitude', String(selectedPosition?.[1]));
		data.append('uf', selectedUf);
		data.append('city', selectedCity);
		data.append('items', selectedItems.join(','));

		if (selectedImage) data.append('image', selectedImage);

		await Axios.post('collectors', data);

		setSubmited(true);
	}

	let content;
	if (submited) {
		content = <Backdrop />;
	} else {
		content = (
			<StyledCreateCollector>
				<header>
					<img src={logo} alt='Ecoleta' />
					<div>
						<NavLink to={HOME}>
							<FiArrowLeft />
							Voltar para home
						</NavLink>
						<ToggleButton onClick={toggleTheme} />
					</div>
				</header>
				<form onSubmit={formSubmitHandler}>
					<h1>Cadastro do ponto de coleta</h1>

					<Dropzone onFileUploaded={setSelectedImage} />

					<fieldset>
						<legend>
							<h2>Dados</h2>
						</legend>
						<div className='field'>
							<label htmlFor='name'>Nome da entidade</label>
							<input
								type='text'
								name='name'
								id='name'
								onChange={inputChangedHandler}
							/>
						</div>
						<div className='field-group'>
							<div className='field'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									id='email'
									onChange={inputChangedHandler}
								/>
							</div>
							<div className='field'>
								<label htmlFor='whatsapp'>Whatsapp</label>
								<input
									type='text'
									name='whatsapp'
									id='whatsapp'
									onChange={inputChangedHandler}
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>
							<h2>Endereço</h2>
							<span>Selecione o endereço no mapa</span>
						</legend>

						<Maps
							onClick={mapClickHandler}
							marker={selectedPosition}
						/>

						<div className='field-group'>
							<div className='field'>
								<label htmlFor='uf'>Estado (UF)</label>
								<select
									name='uf'
									id='uf'
									value={selectedUf}
									onChange={selectedUfHandler}
								>
									<option value='0'>Selecione uma UF</option>
									{ufs.map(uf => (
										<option value={uf} key={uf}>
											{uf}
										</option>
									))}
								</select>
							</div>
							<div className='field'>
								<label htmlFor='city'>Cidade</label>
								<select
									name='city'
									id='city'
									onChange={selectedCityHandler}
								>
									<option value='0'>
										Selecione uma cidade
									</option>
									{cities.map(city => (
										<option value={city} key={city}>
											{city}
										</option>
									))}
								</select>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>
							<h2>Itens de coleta</h2>
							<span>Selecione um ou mais itens abaixo</span>
						</legend>
						<ul className='items-grid'>
							{items.map(item => (
								<li
									key={item.id}
									className={
										selectedItems.includes(item.id)
											? 'selected'
											: ''
									}
									onClick={() => selectItemHandler(item.id)}
								>
									<img src={item.imageUrl} alt={item.title} />
									<span>{item.title}</span>
								</li>
							))}
						</ul>
					</fieldset>

					<button type='submit'>Cadastrar ponto de coleta</button>
				</form>
			</StyledCreateCollector>
		);
	}

	return <>{content}</>;
};

export default CreateCollector;
