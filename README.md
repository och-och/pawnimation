# Pawnimation
An animation library, basically just a simple wrapper around the Animation API.

# Example
```ts
import { paw } from "pawnimation"

const funny = document.querySelector<HTMLButtonElement>("button.funny")!

funny.addEventListener("click", async  () => {
	await paw(funny)
		.duration(400)
		.ease("cubic-bezier(0.34, 1.56, 0.64, 1)")
		.animate({ rotate: 360 + "deg" })
		.finished
	console.log("animation finished")
})
```
