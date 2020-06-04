import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

interface IMapsProps {
	onClick: Function;
	marker?: [number, number] | null;
}

const Maps: React.FC<IMapsProps> = props => {
	const [currentPosition, setCurrentPosition] = useState<[number, number]>([
		-23.6821604,
		-46.8754841,
	]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords;
			setCurrentPosition([latitude, longitude]);
		});
	}, []);

	return (
		<Map center={currentPosition} zoom={10} onClick={props.onClick}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			{props.marker ? <Marker position={props.marker} /> : null}
		</Map>
	);
};

export default Maps;
