<script lang="ts">
  import type { SliderProps } from './types.js';
  import Slider from '../../noph_ext/slider/Slider.svelte'
  import { GamepadButtons, Hint, registerComponent, SliderInputComponent, unregisterComponent } from 'svelte-gamepad-virtual-joystick';
  import { onMount } from 'svelte';
  let {
    inputMapping = {
      name: 'Slider',
      gamepad: -1,
      sensitivity: 0.05,
      axes: 0,
      buttons: [GamepadButtons.DOWN], // activate/focus next component
      buttons_neg: [GamepadButtons.DPAD_LEFT],
      buttons_pos: [GamepadButtons.DPAD_RIGHT],
      keys_pos: ['d'],
      keys_neg: ['a'],
      keys: ['e', 'enter'],  // activate/focus next component
      invert: false
    },
    context=['default'],
    requiresFocus = true,
    value = $bindable<number>(0),
    inputElement = $bindable<HTMLInputElement>(),
    addHints = true,
    ...props
  }: SliderProps = $props();
  let slider = $state();

  onMount(() => {
    const sliderInput = new SliderInputComponent(
      inputMapping,
      (_value: number) => { value = _value; },
      () => {return value;},
      props.min || 0, props.max || 100, props.step || 1,
      inputElement, requiresFocus,  props.onpressed);
    registerComponent(context, sliderInput);
    return () => {
      unregisterComponent(context, sliderInput);
    }
  })
</script>

{#if addHints && props.vertical}
<div class="slider">
  <div class="vslider" style:z-index="2">
    <Hint
      text="" {context}
      keys={inputMapping.keys_pos}
      buttons={inputMapping.buttons_pos}
      style={"position: relative; top: 0px; right: -10px;"}
      />
  </div>
</div>
{/if}

<Slider
  bind:this={slider}
  bind:inputElement
  bind:value
  {...props}
></Slider>

{#if addHints}
<div class="slider">
  <Hint
    text="" {context}
    keys={inputMapping.keys_neg}
    buttons={inputMapping.buttons_neg}
    style={"position: absolute; top: 0px; left: 20px;"}
    />
</div>

{#if !props.vertical}
<div class="slider">
  <div class="hslider">
    <Hint
      text="" {context}
      keys={inputMapping.keys_pos}
      buttons={inputMapping.buttons_pos}
      style={"position: relative; top: 0px; right: -10px;"}
      />
  </div>
</div>
{/if}
{/if}

<style>
  .slider {
    position: relative;
  }

  .hslider {
    position: absolute;
    left: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }

  .vslider {
    position: absolute;
    top: 0%;
  }
</style>