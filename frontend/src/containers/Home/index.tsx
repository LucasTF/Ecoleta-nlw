import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { StyledHome } from './styles';
import { CREATE_COLLECTOR } from '../../routes';

import logo from '../../assets/svg/logo.svg';
import ToggleButton from '../../components/ToggleButton';

interface IHomeProps {
	toggleTheme: () => void;
}

const Home: React.FC<IHomeProps> = ({ toggleTheme }) => {
	return (
		<StyledHome>
			<div className='container'>
				<header>
					<img src={logo} alt='Ecoleta' />
					<ToggleButton onClick={toggleTheme} />
				</header>
				<main>
					<h1>Seu marketplace de coleta de resíduos.</h1>
					<p>
						Ajudamos pessoas a encontrarem pontos de coleta de forma
						eficiente.
					</p>
					<NavLink to={CREATE_COLLECTOR}>
						<span>
							<FiLogIn />
						</span>
						<strong>Cadastre um ponto de coleta</strong>
					</NavLink>
				</main>
			</div>
		</StyledHome>
	);
};

export default Home;
