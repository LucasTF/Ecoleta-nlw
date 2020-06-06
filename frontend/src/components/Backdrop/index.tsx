import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import StyledBackdrop from './styles';

const Backdrop = () => {
	return (
		<StyledBackdrop>
			<FiCheckCircle />
			<p>Cadastro concluido!</p>
		</StyledBackdrop>
	);
};

export default Backdrop;
