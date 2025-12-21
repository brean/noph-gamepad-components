import type { Snippet } from "svelte"
import type { ButtonInput } from "svelte-gamepad-virtual-joystick"
import type { HTMLButtonAttributes } from "svelte/elements"

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

export type ButtonProps = ButtonButtonProps