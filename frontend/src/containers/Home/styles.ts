import styled from 'styled-components';

import bgImg from '../../assets/svg/home-background.svg';

export const StyledHome = styled.div`
	height: 100vh;
	background: url(${bgImg}) no-repeat 780px bottom;

	.container {
		width: 100%;
		height: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		header {
			margin: 3rem 0 0;
		}

		main {
			flex: 1;
			max-width: 560px;
			display: flex;
			flex-direction: column;
			justify-content: center;

			h1 {
				font-size: 3.5rem;
				color: var(--title-color);
				line-height: 1.2;
			}

			p {
				font-size: 1.5rem;
				margin-top: 1.5rem;
			}

			a {
				width: 100%;
				max-width: 360px;
				height: 5rem;
				background: var(--primary-color);
				border-radius: 0.5rem;
				text-decoration: none;
				display: flex;
				align-items: center;
				overflow: hidden;
				margin-top: 2.5rem;

				span {
					display: block;
					background: rgba(0, 0, 0, 0.08);
					width: 5rem;
					height: 5rem;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: background-color 0.2s;

					svg {
						color: #fff;
						width: 20px;
						height: 20px;
					}
				}

				strong {
					flex: 1;
					text-align: center;
					color: #fff;
				}

				:hover {
					background: #2fb86e;
				}
			}
		}
	}

	@media (max-width: 900px) {
		.container {
			align-items: center;
			text-align: center;

			header {
				margin: 3rem auto 0;
			}

			main {
				align-items: center;

				h1 {
					font-size: 2.5rem;
				}

				p {
					font-size: 1.5rem;
				}
			}
		}
	}
`;
