export type AniChoice = 1 | 2 | 3

export type SetAniFunction = (animationId: AniChoice) => void

export interface NavProps {
	setAnimation: SetAniFunction
}

export interface AnimationCentralProps {
	animation: AniChoice
	setAnimation: SetAniFunction
}
