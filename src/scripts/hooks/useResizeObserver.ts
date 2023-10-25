import {useState, useRef, useEffect, RefObject} from 'react';

const useResizeObserver = (ref: RefObject<HTMLElement>) => {
	const observer = useRef<null | ResizeObserver>(null);
	const [clientRect, setClientRect] = useState<false | DOMRectReadOnly>(false);

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
	}, [ref]);

	return clientRect;
}

export default useResizeObserver;