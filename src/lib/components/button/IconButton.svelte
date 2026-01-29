<script lang="ts">
	import { 
		type ButtonInput,
		ButtonInputComponent,
		GamepadButtons,
		registerComponent, unregisterComponent,
		Hint
	} from "svelte-gamepad-virtual-joystick";

	import { onMount, type Snippet } from "svelte";
	import type { IconButtonProps } from "./types.ts";
    import { IconButton } from "noph-ui";

	let {
		children = undefined,
		disabled = false,
		onpressed = undefined,  // only once when the pressed-state changes
		onhold = undefined,   // every event while the button is pressed
		onrelease = undefined,
		onpointerout = undefined,

		color = 'primary',
		style = '',
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
		// need to be focussed.
		requiresFocus=false,
		...props
	}: IconButtonProps = $props();
	let btnInputElement: ButtonInputComponent;

	let element: HTMLButtonElement | HTMLAnchorElement | undefined = $state();

	const buttonClick = () => {
		if (!element || disabled) return;

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
<IconButton bind:element={element} {...props}>
	{#if children}
		{@render children()}
	{/if}
</IconButton>
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


