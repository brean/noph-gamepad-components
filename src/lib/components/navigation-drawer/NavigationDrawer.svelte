<script lang="ts">
	import { NavigationDrawer as NophNavDrawer } from 'noph-ui';
	import type { NavigationDrawerProps } from './types.ts'
    import { addActiveComponent, component_state, GamepadButtons, PrevNextInputComponent, registerComponent, unregisterComponent } from 'svelte-gamepad-virtual-joystick';
    import { onMount } from 'svelte';
	let {
		children,
		requiresFocus = true,
		onpressed = undefined,
		onhold = undefined,
		onrelease = undefined,
		selectedIndex = $bindable(0),
		focussed = $bindable(0),
		inputMapping = {
			name: 'Nav',
			gamepad: -1,
			axes: [1],
			sensitivity: 0.05, // sensitivity - at what value do we react to the axes movement?
			buttons: [GamepadButtons.DOWN],
			buttons_prev: [GamepadButtons.DPAD_UP],
			buttons_next: [GamepadButtons.DPAD_DOWN],
			keys_prev: ['w'],
			keys_next: ['s'],
			keys: ['enter', 'r']  // activate
		},
		context = ['default'],
		consumePress=false,
		wrapFocus=true,
		...attributes
	}: NavigationDrawerProps = $props();

	let element: HTMLElement | undefined = $state();
	
	const getNavItems = () => {
		if (!element) return [];
		return Array.from(
			element.querySelectorAll(
				'a, button, [role="button"], .np-navigation-drawer-item'));
	};

	const _changeFocus = (direction: 1 | -1) => {
		const items = getNavItems();
		if (items.length === 0) return;

		let next = focussed + direction;
		if (wrapFocus) {
			if (next < 0) next = items.length - 1;
			if (next >= items.length) next = 0;
		} else {
			next = Math.max(0, Math.min(items.length - 1, next));
		}

		focussed = next;
		(items[focussed] as HTMLElement)?.focus();
	}

	const _onpressed = () => {
		const items = getNavItems();
		const target = items[focussed] as HTMLElement;
		if (target) {
			selectedIndex = focussed;
			target.click(); 
		}
		if (onpressed) {
			onpressed();
		}
		return true;
	}

	let navInputComponent: PrevNextInputComponent;
	
	onMount(() => {
		if (!element) return;
		navInputComponent = new PrevNextInputComponent(
			inputMapping, _changeFocus,
			element, requiresFocus, 
			_onpressed, onhold, onrelease, consumePress
		);

		registerComponent(context, navInputComponent);

		const handleFocusIn = () => addActiveComponent(navInputComponent);
		const handleFocusOut = () => {
			const idx = component_state.activeComponents.indexOf(navInputComponent);
			if (idx !== -1) component_state.activeComponents.splice(idx, 1);
		};

		element.addEventListener('focusin', handleFocusIn);
		element.addEventListener('focusout', handleFocusOut);

		return () => {
			if (!element) return;
			unregisterComponent(context, navInputComponent);
			element.removeEventListener('focusin', handleFocusIn);
			element.removeEventListener('focusout', handleFocusOut);

		}
	})
</script>
<NophNavDrawer bind:element {...attributes}>
	{#if children}
		{@render children()}
	{/if}
</NophNavDrawer>