import { useState } from "react"
import { AnimationCentral, Nav, Header } from "./components"

function App() {
	const [animation, setAnimation] = useState<number>(1)

	return (
		<>
			<Header />
			<Nav />
      <AnimationCentral />
		
		</>
	)
}

export default App
