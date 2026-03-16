import type { Snippet } from 'svelte'
import type { ButtonInput, PrevNextInput } from 'svelte-gamepad-virtual-joystick'
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements'

export interface NavigationDrawerProps extends HTMLAttributes<HTMLElement> {
	modal?: boolean
	backdrop?: boolean
	element?: HTMLElement
	direction?: 'rtl' | 'ltr',

    onpressed?: () => boolean
    onhold?: () => void
    onrelease?: () => void
    focussed?: number
    selectedIndex?: number
    inputMapping?: PrevNextInput
    context?: string[]
    requiresFocus?: boolean
    consumePress?: boolean
    wrapFocus?: boolean
}

interface NavigationDrawerItemButton extends HTMLButtonAttributes {
	icon?: Snippet
	label: string
	selected?: boolean
	badgeLabelText?: string
}

interface NavigationDrawerItemLink extends HTMLAnchorAttributes {
	icon?: Snippet
	label: string
	selected?: boolean
	badgeLabelText?: string
}

export type NavigationDrawerItemProps = NavigationDrawerItemButton | NavigationDrawerItemLink