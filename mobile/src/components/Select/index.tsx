import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

interface ISelectProps {
	title: string;
	onValueChange: Function;
	items: {
		label: string;
		value: string;
	}[];
}

const Select: React.FC<ISelectProps> = props => {
	return (
		<RNPickerSelect
			onValueChange={value => props.onValueChange(value)}
			items={props.items}
			placeholder={{ label: props.title, value: '0' }}
		/>
	);
};

export default Select;
