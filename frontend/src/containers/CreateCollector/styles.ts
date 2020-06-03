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

		a {
			color: var(--title-color);
			font-weight: bold;
			text-decoration: none;
			display: flex;
			align-items: center;

			svg {
				margin-right: 1rem;
				color: var(--primary-color);
			}
		}
	}

	form {
		margin: 5rem auto;
		padding: 4rem;
		max-width: 730px;
		background: #fff;
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
				color: var(--text-color);
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
				background: #f0f0f5;
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
				background: #f0f0f5;
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
				background: #f0f0f5;
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
			background: var(--primary-color);
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
				background: #2fb86e;
			}
		}
	}

	.items-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		list-style: none;

		li {
			background: #f5f5f5;
			border: 2px solid #f5f5f5;
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
				color: var(--title-color);
			}

			&.selected {
				background: #e1faec;
				border: 2px solid #34cb79;
			}
		}
	}
`;
