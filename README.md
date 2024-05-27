# Pawnimation
An animation library, basically just a simple wrapper around the Animation API.

# Example
```ts
import { paw } from "pawnimation"

const funny = document.querySelector<HTMLButtonElement>("button.funny")!

funny.addEventListener("click", async  () => {
	await paw(funny)
		.duration(400)
		.option("direction", "alternate")
		.option("iterations", 5)
		.ease()
		.animate({ rotate: 360 + "deg" })
		.finished

	await paw(funny)
		.duration(200)
		.ease("cubic-bezier(0.34, 1.56, 0.64, 1)")
		.animateStay({ scale: 2 })
		.finished

	console.log("animations finished")
})

```
