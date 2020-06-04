import styled from 'styled-components/native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native';

interface IItemProps {
	selected: boolean;
}

export const Collectors = styled.View`
	flex: 1;
	padding: 0 32px;
	padding-top: ${20 + Constants.statusBarHeight}px;
`;

export const Title = styled.Text`
	font-size: 20px;
	font-family: Ubuntu_700Bold;
	margin-top: 24px;
`;

export const Description = styled.Text`
	color: #6c6c80;
	font-size: 16px;
	margin-top: 4px;
	font-family: Dosis_400Regular;
`;

export const MapContainer = styled.View`
	flex: 1;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
	margin-top: 16px;
`;

export const Map = styled(MapView)`
	width: 100%;
	height: 100%;
`;

export const MapMarker = styled(Marker)`
	width: 90px;
	height: 80px;
`;

export const MapMarkerContainer = styled.View`
	width: 90px;
	height: 70px;
	background-color: #34cb79;
	flex-direction: column;
	border-radius: 8px;
	overflow: hidden;
	align-items: center;
`;

export const MapMarkerCover = styled.View`
	width: 90px;
	height: 45px;
`;

export const ItemsContainer = styled.View`
	flex-direction: row;
	margin: 16px 16px 32px 16px;
`;

export const Item = styled(TouchableOpacity)`
	background-color: ${(props: IItemProps) =>
		props.selected ? '#e1faec' : '#fff'};
	border-width: 2px;
	border-color: ${(props: IItemProps) =>
		props.selected ? '#34cb79' : '#eee'};
	height: 120px;
	width: 120px;
	border-radius: 8px;
	padding: 20px 16px 16px 20px;
	margin-right: 8px;
	align-items: center;
	justify-content: space-between;
	text-align: center;
`;

export const ItemTitle = styled.Text`
	font-family: Dosis_400Regular;
	text-align: center;
	font-size: 13px;
`;

export const MapMarkerImage = styled.Image`
	width: 90px;
	height: 45px;
`;

export const MapMarkerTitle = styled.Text`
	flex: 1;
	font-family: Dosis_400Regular;
	color: #fff;
	font-size: 13px;
	line-height: 23px;
`;

export const ArrowDown = styled.View`
	width: 0;
	height: 0;
	border-style: solid;
	border-left-width: 10px;
	border-left-color: transparent;
	border-right-width: 10px;
	border-right-color: transparent;
	border-top-color: #34cb97;
	border-top-width: 10px;
	align-self: center;
`;
