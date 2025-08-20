import { Animation1, Animation2, Animation3, Nav } from "./index"
import type { AnimationCentralProps } from "../types"

function AnimationCentral({ animation, setAnimation }: AnimationCentralProps) {
	return (
		<main>
			<Nav setAnimation={setAnimation} />
			{animation === 1 ? <Animation1 /> : animation === 2 ? <Animation2 /> : <Animation3 />}
		</main>
	)
}

export default AnimationCentral
