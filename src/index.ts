export class Paw {
	options: KeyframeAnimationOptions = {
		duration: 300,
	}

	constructor(private element: HTMLElement) {}

	option<K extends keyof KeyframeAnimationOptions>(
		key: K,
		value: KeyframeAnimationOptions[K],
	) {
		this.options[key] = value
		return this
	}

	ease(easing: string = "ease") {
		this.options.easing = easing
		return this
	}

	delay(delay: number) {
		this.options.delay = delay
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
		stay: boolean,
	) {
		if (stay) animation.persist()
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
