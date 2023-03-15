import {useState, useRef, useEffect} from 'react';

const useResizeObserver = (ref) => {
	const observer = useRef(null);
	const [clientRect, setClientRect] = useState(false);

	useEffect(() => {
		observer.current = new ResizeObserver((entries) => {
			if (entries[0]) {
				setClientRect(entries[0].contentRect);
			}
		});
	}, []);

	useEffect(() => {
		if (ref.current && observer?.current?.observe) {
			observer.current.observe(ref.current)
		}
	}, [ref.current]);

	return clientRect;
}

export default useResizeObserver;