import Sketch from "react-p5";
import p5Types from "p5";
import {animate as animateMotion} from 'framer-motion';
import {useEffect, useRef, useState} from "react";

interface ComponentProps {
	rect: DOMRectReadOnly
}

const OFFSET = 60.0 as const;
let roofWidth = .5;
let stickHeight = .5;
let progress = 0;

export default function HeroCanvas(props : ComponentProps) {
	const {
		rect: {
			height,
			width
		}
	} = props;

	const sketchInstance = useRef<p5Types | null>(null);
	const [prevValues, setPrevValues] = useState<{roofWidth: number, stickHeight: number}>({roofWidth, stickHeight});
	const [nextValues, setNextValues] = useState<{roofWidth: number, stickHeight: number}>({roofWidth: 0, stickHeight: 0});
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const [isResizing, setIsResizing] = useState<boolean>(false);

	// const [progress, setProgress] = useState<number>(0);
		
	const ease = (t: number): number  => t * (2 - t);
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

	const onMousePressed = async () => {
		if (sketchInstance.current) {
			startAnimation();
		}
	}
	
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(width, height).parent(canvasParentRef);
		sketchInstance.current = p5;
		drawLetter(p5);
	};

	const draw = (p5: p5Types) => {
		if (isResizing) {
			p5.resizeCanvas(width, height);
			drawLetter(p5);
			setIsResizing(false);
		}
		if (isAnimating) {
			animate(p5);
		}
	};

	const startAnimation = () => {
		const targetRoofWidth = Math.random();
		const targetStickHeight = Math.random();

		setNextValues({
			roofWidth: targetRoofWidth,
			stickHeight: targetStickHeight
		});

		setPrevValues({
			roofWidth,
			stickHeight
		});

		progress = 0;
		setIsAnimating(true);
	}

	const stopAnimation = () => {
		setIsAnimating(false);
	}

	const animate = (p5: p5Types) => {
		if (progress >= 1) {
			stopAnimation();
		} 
		// setProgress(progress => progress + .05);
		progress += .05;
		roofWidth = prevValues.roofWidth + (nextValues.roofWidth - prevValues.roofWidth) * ease(progress);
		stickHeight = prevValues.stickHeight + (nextValues.stickHeight - prevValues.stickHeight) * ease(progress);
		drawLetter(p5);
	}

	useEffect(() => {
		setIsResizing(true);
	}, [width, height]);

	useEffect(() => {
		const timer = setInterval(() => {
			startAnimation();
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="absolute inset-0" onClick={onMousePressed}>
			<Sketch setup={setup} draw={draw}/>
		</div>
	)
}