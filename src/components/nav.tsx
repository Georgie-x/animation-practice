import type { NavProps } from "../types"

function Nav({ setAnimation }: NavProps) {
	return (
	
			<nav>
				<ol className='nav'>
					<li><button onClick={() => setAnimation(1)}>Sun/moon</button></li>
					<li><button onClick={() => setAnimation(2)}>Text effects</button></li>
					<li><button onClick={() => setAnimation(3)}>Parallax</button></li>
				</ol>
			</nav>

	)
}

export default Nav
