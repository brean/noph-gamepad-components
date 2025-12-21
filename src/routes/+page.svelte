<script lang="ts">
  import { Joystick } from "svelte-gamepad-virtual-joystick"

  let position: [x: number, y: number] = $state([0, 0]);
	import { resolve } from '$app/paths'
	import {Button} from 'noph-ui'
</script>

<svelte:head>
	<title>Noph UI - The Ultimate Material 3 UI Library for Svelte 5</title>
</svelte:head>

<p>
	Gamepad support for the <a href="https://noph.dev">noph-ui</a> Material 3 UI framework for Svelte 5.
</p>

<Joystick bind:position /><br />
x: {position[0].toFixed(3)}<br />
y: {position[1].toFixed(3)}
<br />