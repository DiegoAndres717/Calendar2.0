import { useState, useEffect, useRef } from 'react';

function useLocalStorageCalendario(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.sessionStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const prevKeyRef = useRef(key);

	useEffect(() => {
		if (prevKeyRef.current !== key) {
			window.sessionStorage.removeItem(prevKeyRef.current);
			prevKeyRef.current = key;
		}
		window.sessionStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}

function useLocalStorageFirst(key, initialValue) {
	const [value, setValue] = useState(() => {
		const storedValue = sessionStorage.getItem(key);
		return storedValue !== null ? JSON.parse(storedValue) : initialValue;
	});

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export { useLocalStorageCalendario, useLocalStorageFirst };
