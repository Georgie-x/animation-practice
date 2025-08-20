import type { NavProps } from "../types"

function Nav({ setAnimation }: NavProps) {
	return (
	
			<nav>
				<ol className='nav'>
					<li onClick={() => setAnimation(1)}>1</li>
					<li onClick={() => setAnimation(2)}>2</li>
					<li onClick={() => setAnimation(3)}>3</li>
				</ol>
			</nav>

	)
}

export default Nav
