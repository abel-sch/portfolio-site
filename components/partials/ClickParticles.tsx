import { useRef, useEffect, useState } from "react"
import useResizeObserver from "@scripts/hooks/useResizeObserver"
import usePointerPlus from "@scripts/hooks/usePointerPlus";

type Point = {
	x: number
	y: number
}

export default function ClickParticles() {
	const containerRef = useRef(null);
	const containerSize = useResizeObserver(containerRef);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [clickPosition, setClickPosition] = useState<Point | null>(null);
	const canvasRenderer = usePointerPlus(canvasRef);
	console.log(canvasRenderer);

	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			setClickPosition({
				x: e.clientX,
				y: e.clientY
			});
		};
		window.addEventListener('click', onClick);

		return () => window.removeEventListener('click', onClick);
	}, []);


	useEffect(() => {
		if (clickPosition && canvasRef.current) {
			const context = canvasRef.current.getContext('2d');

			if (context && containerSize) {
				context.clearRect(0, 0, containerSize.width, containerSize.height);
				context.font = "30px Arial";
				context.fillStyle = "white";
				context.textAlign = "center";
				context.fillText("+", clickPosition.x, clickPosition.y);
			}
		}
	}, [clickPosition, containerSize])

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