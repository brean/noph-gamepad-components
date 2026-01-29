<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
  import { GamepadButtons, Icon } from 'svelte-gamepad-virtual-joystick';

  function handleClick() {
    console.log('Action triggered.')
  }

</script>

<svelte:head>
	<title>Buttons - Noph UI Gamepad Components</title>
</svelte:head>

<h1>Buttons</h1>
<Button onclick={handleClick} size="m" variant="outlined">Press <Icon type="ps4" input={GamepadButtons.CROSS}></Icon> or <Icon type="xbox" input={GamepadButtons.A}></Icon> on your gamepad or <Icon type="keyboard_mouse" input={'e'}></Icon> on your keyboard</Button>
<br />
...or use a mouse click or touch.