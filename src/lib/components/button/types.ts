import type { Snippet } from "svelte"
import type { ButtonInput } from "svelte-gamepad-virtual-joystick"
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from "svelte/elements"

// An interface can only extend an object type or intersection of object types
// with statically known members, so we need to re-define the types from
// noph/types and can not simply inherit from them.

interface ButtonButtonProps extends HTMLButtonAttributes {
	// default Button
	variant?: 'text' | 'filled' | 'outlined' | 'elevated' | 'tonal'
	start?: Snippet | undefined
	end?: Snippet | undefined
	element?: HTMLElement
	disabled?: boolean
	loading?: boolean
	loadingAriaLabel?: string
	size?: 'xs' | 's' | 'm' | 'l' | 'xl'
	toggle?: boolean
	shape?: 'round' | 'square'
	selected?: boolean

	// Gamepad Button
	onpressed?: () => void,  // only once when the pressed-state changes
	onhold?: () => void,   // every event while the button is pressed
	onrelease?: () => void,
	inputMapping?: ButtonInput,
	cssclassWrapper?: string,
	context?: string[],
	requiresFocus?: boolean
}

interface ButtonAnchorProps extends HTMLAnchorAttributes {
	variant?: 'text' | 'filled' | 'outlined' | 'elevated' | 'tonal'
	start?: Snippet
	end?: Snippet
	element?: HTMLElement
	disabled?: boolean
	loading?: boolean
	loadingAriaLabel?: string
	size?: 'xs' | 's' | 'm' | 'l' | 'xl'
	toggle?: boolean
	shape?: 'round' | 'square'
	selected?: boolean

	// Gamepad Button
	onpressed?: () => void,  // only once when the pressed-state changes
	onhold?: () => void,   // every event while the button is pressed
	onrelease?: () => void,
	inputMapping?: ButtonInput,
	cssclassWrapper?: string,
	context?: string[],
	requiresFocus?: boolean
}



interface IconButtonAnchorProps extends HTMLAnchorAttributes {
	variant?: 'text' | 'filled' | 'outlined' | 'tonal'
	element?: HTMLElement
	disabled?: boolean
	loading?: boolean
	loadingAriaLabel?: string
	toggle?: boolean
	selected?: boolean
	selectedIcon?: Snippet
	shape?: 'round' | 'square'
	size?: 'xs' | 's' | 'm' | 'l' | 'xl'
	width?: 'narrow' | 'wide' | 'default'

	// Gamepad Button
	onpressed?: () => void,  // only once when the pressed-state changes
	onhold?: () => void,   // every event while the button is pressed
	onrelease?: () => void,
	inputMapping?: ButtonInput,
	cssclassWrapper?: string,
	context?: string[],
	requiresFocus?: boolean
}

interface IconButtonButtonProps extends HTMLButtonAttributes {
	variant?: 'text' | 'filled' | 'outlined' | 'tonal'
	element?: HTMLElement
	toggle?: boolean
	selected?: boolean
	loading?: boolean
	loadingAriaLabel?: string
	selectedIcon?: Snippet
	shape?: 'round' | 'square'
	size?: 'xs' | 's' | 'm' | 'l' | 'xl'
	width?: 'narrow' | 'wide' | 'default'

	// Gamepad Button
	onpressed?: () => void,  // only once when the pressed-state changes
	onhold?: () => void,   // every event while the button is pressed
	onrelease?: () => void,
	inputMapping?: ButtonInput,
	cssclassWrapper?: string,
	context?: string[],
	requiresFocus?: boolean
}


export type ButtonProps = ButtonButtonProps | ButtonAnchorProps
export type IconButtonProps = IconButtonButtonProps | IconButtonAnchorProps
