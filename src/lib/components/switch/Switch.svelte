<script lang="ts">
	import {
		ButtonInputComponent,
		GamepadButtons,
		registerComponent, unregisterComponent,
		Hint
	} from "svelte-gamepad-virtual-joystick";

	import { onMount } from "svelte";
	import type { SwitchProps } from "./types.ts";
    import { Switch } from "noph-ui";

	let {
		disabled = false,
		inputElement = $bindable(),
		onpressed = undefined,  // only once when the pressed-state changes
		onhold = undefined,   // every event while the button is pressed
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
		// need to be focussed.
		requiresFocus=false,
		...props
	}: SwitchProps = $props();
	let switchInputElement: ButtonInputComponent;

	let element: HTMLDivElement | undefined = $state();

	const toggleSwitch = () => {
		inputElement?.click()
	};

	class NophSwitchInputElement extends ButtonInputComponent {
		onpressed(): boolean {
			toggleSwitch();
			return false;
		}
	}

	onMount(() => {
		switchInputElement = new NophSwitchInputElement(
			inputMapping, element, requiresFocus,
			onpressed, onhold, onrelease);
		registerComponent(context, switchInputElement);
		return () => {
			if (!switchInputElement) { return };
			unregisterComponent(context, switchInputElement);
		}
	});
</script>

<div class={cssclassWrapper}>
<Switch bind:inputElement bind:element {...props} />
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


