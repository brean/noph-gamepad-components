<script lang="ts">
  import { IconButton, NavigationDrawer } from 'noph-ui'
  import MainNavigation from '../MainNavigation.svelte'
  import 'noph-ui/defaultTheme'
  import '../app.css'
  import Icon from '$lib/noph_ext/Icon.svelte';
  import ThemeButton from '../ThemeButton.svelte'
  import { component_state, GamepadButtons, InputManager, VirtualButton } from 'svelte-gamepad-virtual-joystick';

  let { children } = $props();
  let popover: HTMLElement | undefined = $state()

  const hintMapping = {
    name: 'Hint',
    gamepad: -1,
    buttons: [GamepadButtons.VIEW],
    keys: ['h']
  }
</script>
<header class="layout-btn">
  <div class="inner-header">
		<IconButton popovertarget="mobile-drawer" variant="text" title="Open" class="menu-btn"
			><Icon>menu</Icon></IconButton
		>
		<div class="spacer"></div>
		<ThemeButton />
	</div>
</header>

<NavigationDrawer
  --np-navigation-drawer-item-font-size="1rem"
  --np-navigation-drawer-width="16rem"
  --np-navigation-drawer-height="calc(100dvh - 4.5rem)"
  --np-navigation-drawer-background="var(--np-color-surface-container)"
  class={['main-nav', 'scroll-wrapper']}
>
  <MainNavigation />
</NavigationDrawer>
<NavigationDrawer
	--np-navigation-drawer-item-font-size="1rem"
	bind:element={popover}
	popover="auto"
	id="mobile-drawer"
	class={['scroll-wrapper']}
	backdrop
	modal
>
	<IconButton
		style="margin-inline-start: 1rem"
		popovertarget="mobile-drawer"
		variant="text"
		title="Close"
	>
		<Icon>menu_open</Icon>
	</IconButton>
	<MainNavigation
		onclose={() => {
			popover?.hidePopover()
		}}
	/>
</NavigationDrawer>

<div class="paper"></div>
<main class="main">
  <div class="main-content">
    {@render children()}
  </div>
</main>


<VirtualButton
  context={['default']}
  onpressed={() => {
    // show all hints
    component_state.showHints = !component_state.showHints;
  }}
  inputMapping={hintMapping}
></VirtualButton>
<div class="bottom-bar"></div>

<InputManager />
<style>
  .spacer {
		flex-grow: 1;
	}
  @keyframes focusAnimation {
    0% {
      outline-width: 3px;
    }
    50% {
      outline-width: 6px;
    }
    100% {
      outline-width: 3px;
    }
  }
  .main-content {
    max-width: min(100%, 980px);
    margin-inline: auto;
  }
  .main {
    margin-top: 4.5rem;
    padding: 0 1rem 2rem 1rem;
    overflow: auto;
  }
  .layout-btn {
    --np-text-button-label-text-color: var(--np-color-on-surface);
  }
  .inner-header {
    height: 4.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-inline: 0.5rem;
  }
  .bottom-bar {
    display: none;
    position: fixed;
    height: 1rem;
    width: 100%;
    background-color: var(--np-color-surface-container);
    bottom: 0;
  }
  .paper {
    position: fixed;
    width: 100%;
    height: calc(100dvh - 4.5rem);
    background-color: var(--np-color-background);
    border-radius: var(--np-shape-corner-extra-large);
    z-index: -1;
  }
  :global(.main-nav) {
    position: fixed;
    display: none;
  }
  header {
    background: var(--np-color-surface-container);
    position: fixed;
    inset-inline: 0;
    top: 0;
    z-index: 10;
    display: grid;
  }

  @media (min-width: 768px) {
    .inner-header {
      padding-inline-end: 1rem;
    }
    .main {
      margin-inline-start: 16rem;
      padding: 0 3rem 4rem 3rem;
    }
    .paper {
      width: calc(100% - 18rem);
      margin-inline-start: 17rem;
      height: calc(100dvh - 5.5rem);
    }
    .bottom-bar {
      display: block;
      margin-inline-start: 16rem;
      width: calc(100% - 16rem);
    }
    :global(.main-nav) {
      display: block;
    }
    :global(.nav[popover]) {
      display: none;
    }
    :global(.menu-btn) {
      display: none !important;
    }
  }
</style>
