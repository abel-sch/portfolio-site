import { useRef, useEffect, useState, useMemo } from "react"
import useResizeObserver from "@scripts/hooks/useResizeObserver"
import Renderer from "@scripts/libs/PlusRenderer";

type Point = {
	x: number
	y: number
}

export default function ClickParticles() {
	const containerRef = useRef(null);
	const containerSize = useResizeObserver(containerRef);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasRenderer = useMemo(() => new Renderer(), []);

	useEffect(() => {
		if (canvasRef.current && canvasRenderer) {
			canvasRenderer.setCanvas(canvasRef.current);
			console.log('set canvas');
		}
	}, [canvasRef, canvasRenderer]);


	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			canvasRenderer.add(e.clientX, e.clientY);
		}

		window.addEventListener('click', onClick);

		return () => window.removeEventListener('click', onClick);
	}, [canvasRenderer])

	useEffect(() => {
		if (containerSize && canvasRenderer) {
			canvasRenderer.resize(containerSize.width, containerSize.height);
		}
	}, [containerSize, canvasRenderer]);

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 pointer-events-none z-50"
		>
			{ containerSize && (
				<canvas
					ref={canvasRef}
					width={containerSize.width}
					height={containerSize.height}
				/>
			) }
		</div>
	)
}