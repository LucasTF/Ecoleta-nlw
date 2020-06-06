import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

import StyledButton from './styles';

interface IToggleButtonProps {
	onClick: () => void;
}

const ToggleButton: React.FC<IToggleButtonProps> = props => {
	const theme = useContext(ThemeContext);

	return (
		<StyledButton onClick={props.onClick}>
			{theme.title === 'light' ? (
				<FiMoon size={18} />
			) : (
				<FiSun size={18} />
			)}
		</StyledButton>
	);
};

export default ToggleButton;
