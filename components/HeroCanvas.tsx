import Sketch from "react-p5";
import p5Types from "p5";
import {useEffect, useRef} from "react";

interface ComponentProps {
	rect: DOMRectReadOnly
}

const OFFSET = 60.0 as const;
let isAnimating = false;
let roofWidth = .5;
let stickHeight = .5;

export default function HeroCanvas(props : ComponentProps) {
	const sketchInstance = useRef<p5Types | null>(null);
	
	const {
		rect: {
			height,
			width
		}
	} = props;
	
	useEffect(() => {
		isAnimating = true;
	}, [width, height]);

	const drawLetter = (p5: p5Types) => {
		// Roof
		const maxHalfRoofWidth = (.5 * width) - OFFSET;

		p5.background(224);
		p5.noFill();
		p5.strokeWeight(60);
		p5.strokeCap(p5.PROJECT);
		p5.stroke(26,26,26);
		p5.beginShape();
		p5.vertex(OFFSET, height - OFFSET);
		p5.vertex(OFFSET + (roofWidth * maxHalfRoofWidth), OFFSET);
		p5.vertex((width - OFFSET) - (roofWidth * maxHalfRoofWidth), OFFSET);
		p5.vertex(width - OFFSET, height - OFFSET);
		p5.endShape();

		// Stick
		const stickY = OFFSET * 3 + stickHeight * (height - OFFSET * 5);
		const currentHalfRoofWidth = roofWidth * maxHalfRoofWidth;
		const increment = currentHalfRoofWidth / (height - 2 * OFFSET);
		const widthOffset = increment * ((height - OFFSET) - stickY);

		p5.strokeCap(p5.ROUND);
		p5.beginShape();
		p5.vertex(OFFSET + widthOffset, stickY);
		p5.vertex(width - (OFFSET + widthOffset), stickY);
		p5.endShape();
	}

	const onMousePressed = () => {
		if (sketchInstance.current) {
			roofWidth = Math.random();
			stickHeight = Math.random();
	
			drawLetter(sketchInstance.current);
		}
	}
	
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(width, height).parent(canvasParentRef);
		sketchInstance.current = p5;

		drawLetter(p5);
	};

	const draw = (p5: p5Types) => {
		if (isAnimating) {
			animate(p5)
		}
	};

	const animate = (p5: p5Types) => {
		p5.resizeCanvas(width, height);

		drawLetter(p5);

		isAnimating = false;
	}

	return (
		<div className="absolute inset-0" onClick={onMousePressed}>
			<Sketch setup={setup} draw={draw}/>
		</div>
	)
}