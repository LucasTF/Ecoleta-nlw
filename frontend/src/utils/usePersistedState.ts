import { useState, useEffect } from 'react';

export const usePersistedState = (key: string, initialState: any) => {
	const [state, setState] = useState(
		JSON.parse(localStorage.getItem(key) as string) || initialState
	);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
};
