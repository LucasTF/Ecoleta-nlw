import styled from 'styled-components';

const StyledBackdrop = styled.div`
	width: 100vw;
	height: 100vh;
	color: var(--primary-color);
	background: #222;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 2rem;

	svg {
		size: 2rem;
	}
`;

export default StyledBackdrop;
