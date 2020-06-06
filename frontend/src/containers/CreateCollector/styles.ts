import styled from 'styled-components';

export const StyledCreateCollector = styled.div`
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;

	header {
		margin-top: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		div {
			display: flex;
			flex-direction: row;

			a {
				margin-right: 1rem;
				color: ${props => props.theme.colors.textColor};
				font-weight: bold;
				text-decoration: none;
				display: flex;
				align-items: center;

				svg {
					margin-right: 1rem;
					color: ${props => props.theme.colors.primaryColor};
				}
			}
		}
	}

	form {
		margin: 5rem auto;
		padding: 4rem;
		max-width: 730px;
		background: ${props => props.theme.colors.formColor};
		border-radius: 8px;
		display: flex;
		flex-direction: column;

		h1 {
			font-size: 2rem;
		}

		fieldset {
			margin-top: 4rem;
			min-inline-size: auto;
			border: 0;
		}

		legend {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 2.5rem;

			h2 {
				font-size: 1.5rem;
			}

			span {
				font-weight: normal;
				color: ${props => props.theme.colors.textColor};
			}
		}

		.field-group {
			flex: 1;
			display: flex;

			.field + .field {
				margin-left: 1.5rem;
			}

			input + input {
				margin-left: 1.5rem;
			}
		}

		.field {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-bottom: 1.5rem;

			:disabled {
				cursor: not-allowed;
			}

			input {
				flex: 1;
				background: ${props => props.theme.colors.inputColor};
				border-radius: 8px;
				border: 0;
				padding: 1rem 1.5rem;
				font-size: 1rem;
				color: #6c6c80;

				::placeholder {
					color: #a0a0b2;
				}
			}

			select {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				flex: 1;
				background: ${props => props.theme.colors.backgroundColor};
				border-radius: 8px;
				border: 0;
				padding: 1rem 1.5rem;
				font-size: 16px;
				color: #6c6c80;
			}

			label {
				margin-bottom: 0.5rem;
			}
		}

		.field-check {
			flex-direction: row;
			align-items: center;

			input {
				background: ${props => props.theme.colors.inputColor};
			}

			label {
				margin: 0 0 0 0.5rem;
			}
		}

		.leaflet-container {
			width: 100%;
			height: 350px;
			border-radius: 8px;
			margin-bottom: 1.5rem;
		}

		button {
			width: 260px;
			height: 56px;
			background: ${props => props.theme.colors.primaryColor};
			border-radius: 8px;
			color: #fff;
			font-weight: bold;
			font-size: 16px;
			border: 0;
			align-self: flex-end;
			margin-top: 2.5rem;
			transition: background-color 0.2s;
			cursor: pointer;

			:hover {
				background: ${props => props.theme.colors.secondaryColor};
			}
		}
	}

	.items-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		list-style: none;

		li {
			background: ${props => props.theme.colors.boxColor};
			border: 2px solid ${props => props.theme.colors.boxColor};
			height: 180px;
			border-radius: 8px;
			padding: 2rem 1.5rem 1rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			text-align: center;
			cursor: pointer;

			span {
				flex: 1;
				margin-top: 0.8rem;
				display: flex;
				align-items: center;
				color: ${props => props.theme.colors.titleColor};
			}

			&.selected {
				background: ${props => props.theme.colors.tertiaryColor};
				border: 2px solid ${props => props.theme.colors.primaryColor};
			}
		}
	}
`;
