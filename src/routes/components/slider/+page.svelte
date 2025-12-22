<script lang="ts">
  import Slider from '$lib/components/slider/Slider.svelte'
  import { onMount } from 'svelte';
  import { focusNextElement, focusPreviousElement, GamepadButtons, Icon, VirtualButton, type SliderInput } from 'svelte-gamepad-virtual-joystick';

  let valueFirst = $state(50)
  let valueSecond = $state(40)
  let valueThird = $state(30)
  let firstSlider = $state<HTMLInputElement>();
  const inputMappingHorizontal: SliderInput = {
    name: "horizontal_slider_input",
    gamepad: -1,
    axes: 0,
    sensitivity: 0.0,
    buttons_pos: [GamepadButtons.DPAD_UP],
    buttons_neg: [GamepadButtons.DPAD_DOWN],
    keys_pos: ['w'],
    keys_neg: ['s'],
    buttons: [],
    keys: [],
    invert: false
  };
  
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
<br />
This one is vertical, so we change to <Icon type="ps4" input={GamepadButtons.DPAD_VERTICAL} /> (d-pad vertical)

<Slider bind:value={valueThird} step={10} stops={true} size="m" vertical inputMapping={inputMappingHorizontal}></Slider>

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