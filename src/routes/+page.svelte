<script lang="ts">
  import { Joystick, Icon, GamepadButtons } from "svelte-gamepad-virtual-joystick"
  import { Snackbar} from 'noph-ui';
  import { onMount } from 'svelte';

  let position: [x: number, y: number] = $state([0, 0]);

  let snackbar = $state<HTMLElement>();
	onMount(() => {
    if (!snackbar) return;
    snackbar.showPopover();
  });
</script>

<svelte:head>
	<title>Noph UI - The Ultimate Material 3 UI Library for Svelte 5</title>
</svelte:head>

<p>
	Gamepad support for the <a href="https://noph.dev">noph-ui</a> Material 3 UI framework for Svelte 5.
</p>

<p>
	See quick-start for instructions how to integrate in your project and take a look at the example projects.
</p>

<p>
  Press <Icon input="h" type="keyboard_mouse" /> on the keyboard or <Icon input={GamepadButtons.OPTIONS} type="ps4" /> on the PS4 controller for a hint.
</p>

<Joystick bind:position /><br />
x: {position[0].toFixed(3)}<br />
y: {position[1].toFixed(3)}
<br />

<Snackbar
	bind:element={snackbar}
	id="help-hint"
	label="Press 'H' on the keyboard or"
  supportingText="'OPTIONS' on the PS4 controller for a hint."
/>