import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		colors: {
			primaryColor: string;
			secondaryColor: string;
			tertiaryColor: string;
			backgroundColor: string;
			titleColor: string;
			formColor: string;
			inputColor: string;
			boxColor: string;
			textColor: string;
		};
	}
}
