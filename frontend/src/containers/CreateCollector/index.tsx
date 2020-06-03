import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { HOME } from '../../routes';
import { StyledCreateCollector } from './styles';

import logo from '../../assets/svg/logo.svg';

const CreateCollector: React.FC = () => {
	return (
		<StyledCreateCollector>
			<header>
				<img src={logo} alt='Ecoleta' />
				<NavLink to={HOME}>
					<FiArrowLeft />
					Voltar para home
				</NavLink>
			</header>
			<form>
				<h1>Cadastro do ponto de coleta</h1>
				<fieldset>
					<legend>
						<h2>Dados</h2>
					</legend>
					<div className='field'>
						<label htmlFor='name'>Nome da entidade</label>
						<input type='text' name='name' id='name' />
					</div>
					<div className='field-group'>
						<div className='field'>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' id='email' />
						</div>
						<div className='field'>
							<label htmlFor='whatsapp'>Whatsapp</label>
							<input type='text' name='whatsapp' id='whatsapp' />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>
						<h2>Endereço</h2>
						<span>Selecione o endereço no mapa</span>
					</legend>
					<div className='field-group'>
						<div className='field'>
							<label htmlFor='uf'>Estado (UF)</label>
							<select name='uf' id='uf'>
								<option value='0'>Selecione uma UF</option>
							</select>
						</div>
						<div className='field'>
							<label htmlFor='city'>Cidade</label>
							<select name='city' id='city'>
								<option value='0'>Selecione uma cidade</option>
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
						<li>
							<img
								src='http://localhost:3333/assets/oleo.svg'
								alt='Oleo'
							/>
							<span>Óleo de Cozinha</span>
						</li>
						<li>
							<img
								src='http://localhost:3333/assets/oleo.svg'
								alt='Oleo'
							/>
							<span>Óleo de Cozinha</span>
						</li>
						<li>
							<img
								src='http://localhost:3333/assets/oleo.svg'
								alt='Oleo'
							/>
							<span>Óleo de Cozinha</span>
						</li>
						<li>
							<img
								src='http://localhost:3333/assets/oleo.svg'
								alt='Oleo'
							/>
							<span>Óleo de Cozinha</span>
						</li>
						<li>
							<img
								src='http://localhost:3333/assets/oleo.svg'
								alt='Oleo'
							/>
							<span>Óleo de Cozinha</span>
						</li>
						<li>
							<img
								src='http://localhost:3333/assets/oleo.svg'
								alt='Oleo'
							/>
							<span>Óleo de Cozinha</span>
						</li>
					</ul>
				</fieldset>

				<button type='submit'>Cadastrar ponto de coleta</button>
			</form>
		</StyledCreateCollector>
	);
};

export default CreateCollector;
