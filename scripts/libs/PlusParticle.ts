import Renderer from "./PlusRenderer";

const randomPos = (x:number, y:number) => {
	return {
		x: x + (Math.random() * 20) - 10,
		y: y + (Math.random() * 20) - 10
	}
}

export default class PlusParticle {
	startPosition: { x: number, y :number };
	life: number;
	renderer: Renderer;

	constructor(x: number, y: number, renderer: Renderer) {
		this.startPosition = randomPos(x, y);
		this.life = 20;
		this.renderer = renderer;
	}

	tick() {
		if (this.life <= 0) {
			this.destroy();
		}
		this.life -= 1;
	}

	render(context: CanvasRenderingContext2D) {
		const opacity = this.life / 20;
		const radius = (20 - this.life);
		context.beginPath();
		context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
		context.arc(this.startPosition.x, this.startPosition.y, radius, 0, 2 * Math.PI, false);
		context.fill();
	}

	destroy() {
		this.renderer.remove(this);
	}
}