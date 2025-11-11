import { useState } from "react"
import { AnimationCentral, Header } from "./components"
import type { AniChoice } from "./types"
import "./styles/index.css"


function App() {
	const [animation, setAnimation] = useState<AniChoice>(1)

	return (
		<>
			<Header />

			<AnimationCentral animation={animation} setAnimation={setAnimation} />
		</>
	)
}

export default App
