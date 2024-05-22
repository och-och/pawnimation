export class Paw {
	options: KeyframeAnimationOptions = {
		duration: 300,
	}

	constructor(private element: HTMLElement) {}

	ease(easing: string = "ease") {
		this.options.easing = easing
		return this
	}

	duration(duration: number) {
		this.options.duration = duration
		return this
	}

	composite(operation: CompositeOperation = "accumulate") {
		this.options.composite = operation
	}

	animate(...frames: Keyframe[]) {
		return new RunningPaw(this.element.animate(frames, this.options), false)
	}

	animateStay(...frames: Keyframe[]) {
		this.options.fill = "forwards"
		return new RunningPaw(this.element.animate(frames, this.options), true)
	}
}

export class RunningPaw {
	constructor(
		private animation: globalThis.Animation,
		stay: boolean
	) {
		if (stay) {
			this.animation.finished.then(animation => {
				animation.commitStyles()
				animation.cancel()
			})
		}
	}

	get finished() {
		return this.animation.finished
	}

	finish() {
		this.animation.finish()
	}

	cancel() {
		this.animation.cancel()
	}
}

export function paw(element: HTMLElement) {
	return new Paw(element)
}
