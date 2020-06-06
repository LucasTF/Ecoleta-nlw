import styled from 'styled-components';
import { shade } from 'polished';

const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	border: 1px solid ${props => shade(0.3, props.theme.colors.backgroundColor)};
	border-radius: 4px;
	background: ${props => shade(0.05, props.theme.colors.backgroundColor)};
	cursor: pointer;

	svg {
		color: ${props => props.theme.colors.textColor};
	}

	:hover {
		background: ${props => shade(0.1, props.theme.colors.backgroundColor)};
	}
`;

export default StyledButton;
