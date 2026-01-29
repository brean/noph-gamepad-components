<script lang="ts">
	import {
		ButtonInputComponent,
		GamepadButtons,
		Hint,
		registerComponent, unregisterComponent
	} from "svelte-gamepad-virtual-joystick";

	import { Button } from 'noph-ui';
	import type { ButtonProps } from './types.ts';
	import { onMount } from 'svelte';

	let {
		children = undefined,
		disabled = false,
		loading = false,
		onpointerout = undefined,
		onpressed = undefined,
		onhold = undefined,
		onrelease = undefined,
		inputMapping = {
			name: '',
			gamepad: -1,
			buttons: [GamepadButtons.DOWN],
			keys: ['e', ' ']
		},
		cssclassWrapper = 'button-wrapper',
		context = ['default'],
		// button is one of the few elements that can be activated globally by
		// default while other UI-components like Slider, List or Joystick
		// always needs to be focussed.
		requiresFocus=false,
		...props
	}: ButtonProps = $props();

	let btnInputElement: ButtonInputComponent;

	let element: HTMLButtonElement | HTMLAnchorElement | undefined = $state();

	const buttonClick = () => {
		if (!element || disabled || loading) return;

		const rippleEl = element.querySelector<HTMLDivElement>('.np-ripple-surface');
		if (rippleEl) {
						rippleEl.click();
				}
		element.click();
	};

	class NophButtonInputElement extends ButtonInputComponent {
		onpressed(): boolean {
			buttonClick();
			return false;
		}
	}

	onMount(() => {
		btnInputElement = new NophButtonInputElement(
			inputMapping, element, requiresFocus,
			onpressed, onhold, onrelease);
		registerComponent(context, btnInputElement);
		return () => {
			if (!btnInputElement) { return };
			unregisterComponent(context, btnInputElement);
		}
	});
</script>

<div class={cssclassWrapper}>
<Button bind:element={element} {loading} {...props}>
	{#if children}
		{@render children()}
	{/if}
</Button>
<Hint
	{context}
	keys={inputMapping.keys}
	buttons={inputMapping.buttons}
	style={'left: 50%;'}
	/>
</div>

<style>
	:global(.hint-container) {
		top: 100%;
		left: 50%;
	}

	:global(.hint) {
		top: 20px;
	}

	.button-wrapper {
		position: relative;
		display: inline-block; /* Or 'block', depending on your layout */
	}
</style>