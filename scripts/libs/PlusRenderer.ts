import PlusParticle from "./PlusParticle";

export default class Renderer {
	canvas: HTMLCanvasElement | null;
	size: { width: number, height: number };
	particles: PlusParticle[];
	isRendering: boolean;

	constructor() {
		this.canvas = null;
		this.size = { width: 0, height: 0}
		this.particles = [];
		this.isRendering = false;
	}

	setCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}

	resize(width: number, height: number) {
		this.size = { width, height };
	}

	add(x: number, y: number) {
		this.particles.push(new PlusParticle(x, y, this));

		if (!this.isRendering) {
			this.render();
			this.isRendering = true;
		}
	}

	tick() {
		this.particles.forEach(particle => particle.tick());
		console.log(this.particles.length);
		console.log(this.canvas);
	}

	remove(particle: PlusParticle) {
		const particleIndex = this.particles.indexOf(particle);
		this.particles.splice(particleIndex, 1);
	}

	render() {
		this.tick();
		if (this.canvas) {
			const context = this.canvas.getContext('2d');
			if (context) {
				context.clearRect(0, 0, this.size.width, this.size.height);
				this.particles.forEach(particle => particle.render(context));
			}
		}

		if (this.particles.length > 0) {
			window.requestAnimationFrame(this.render.bind(this));
		} else {
			this.isRendering = false;
		}
	}
}