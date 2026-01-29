<script lang="ts">
	import IconButton from '$lib/components/button/IconButton.svelte';
	import Icon from '$lib/noph_ext/Icon.svelte';
	import { GamepadButtons, Icon as GamePadIcon } from 'svelte-gamepad-virtual-joystick';

	function handleClick() {
		console.log('Action triggered.')
	}

</script>

<svelte:head>
	<title>IconButton - Noph UI Gamepad Components</title>
</svelte:head>

<h1>IconButtons</h1>
<IconButton onclick={handleClick} size="m" variant="outlined" aria-label="Icon Button"><Icon>favorite</Icon>
</IconButton>
<br />
Press <GamePadIcon type="ps4" input={GamepadButtons.CROSS}></GamePadIcon> or <GamePadIcon type="xbox" input={GamepadButtons.A}></GamePadIcon> on your gamepad or <GamePadIcon type="keyboard_mouse" input={'e'}></GamePadIcon> on your keyboard or use a mouse click or touch.