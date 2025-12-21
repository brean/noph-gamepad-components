<script lang="ts">
  import Slider from '$lib/components/slider/Slider.svelte'
  import { onMount } from 'svelte';
  import { focusNextElement, focusPreviousElement, GamepadButtons, Icon, VirtualButton } from 'svelte-gamepad-virtual-joystick';

  let valueFirst = $state(50)
  let valueSecond = $state(40)
  let firstSlider = $state<HTMLInputElement>();
  
  onMount(() => {
    if (!firstSlider) return;
    firstSlider.focus();
  })
</script>

<svelte:head>
	<title>Slider - Noph UI Gamepad Components</title>
</svelte:head>

<h1>Slider</h1>
use the bumper (<Icon type="ps4" input={GamepadButtons.L1} />/<Icon type="ps4" input={GamepadButtons.R1} />) to switch between the Slider components, use <Icon type="ps4" input={GamepadButtons.DPAD_HORIZONTAL} /> (d-pad horizontal) to move the slider by its step value.
<Slider bind:value={valueFirst} size="m" bind:inputElement={firstSlider}></Slider><br />
<Slider bind:value={valueSecond} step={5} stops={true} size="m"></Slider>

<VirtualButton
  onpressed={() => {
    focusNextElement();
  }}
  inputMapping={{
    name: 'Focus next',
    gamepad: -1,
    buttons: [GamepadButtons.BUMPER_RIGHT],
    keys: ['k']
  }}
></VirtualButton>
<VirtualButton
  onpressed={() => {
    focusPreviousElement();
  }}
  inputMapping={{
    name: 'Focus previous',
    gamepad: -1,
    buttons: [GamepadButtons.BUMPER_LEFT],
    keys: ['i']
  }}
></VirtualButton>