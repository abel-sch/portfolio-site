import { useEffect, RefObject } from "react";

class Renderer {
	canvas: HTMLCanvasElement | null;

	constructor() {
		this.canvas = null;
	}

	setCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}
}

const usePointerPlus = (ref: RefObject<HTMLCanvasElement>) => {
	useEffect(() => {
		if (ref.current) {
			console.log('hoi', ref.current);
		}
		console.log(ref);
	}, [ref]);

	return 'hoi';
}

export default usePointerPlus;