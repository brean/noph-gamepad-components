<script lang="ts">
	import Icon from '$lib/noph_ext/Icon.svelte';
	import NavigationDrawer from '$lib/components/navigation-drawer/NavigationDrawer.svelte'
	import { NavigationDrawerItem } from 'noph-ui';
	import Button from '$lib/components/button/Button.svelte';
	import Code from '../../../Code.svelte';
	import DemoContainer from '../../../DemoContainer.svelte';
	import { GamepadButtons, Icon as GamepadIcon } from 'svelte-gamepad-virtual-joystick';
	import { tick } from 'svelte';
	let selectionModalNav = $state(1);
	let selection = $state(1);
	let drawerElement: HTMLElement | undefined = $state();
</script>

<svelte:head>
	<title>Navigation Drawer - Noph UI</title>
</svelte:head>

<h1>Navigation Drawer</h1>
<h2>Usage</h2>

<DemoContainer>
	<Button
		style="min-width: 200px;"
		inputMapping={{
			name: '',
			gamepad: -1,
			buttons: [GamepadButtons.RIGHT],
			keys: ['e']
		}}
		onclick={() => {
			if (drawerElement) {
				drawerElement.togglePopover();
				tick().then(() => {
					if (drawerElement) {
						drawerElement.focus();
					}
				});
			}
			return true;
		}}>
		Open Nav <GamepadIcon type="ps4" input={GamepadButtons.RIGHT} />/<GamepadIcon type="keyboard_mouse" input={'e'} />
	</Button>
	<NavigationDrawer
		id="demo-drawer"
		modal
		bind:selectedIndex={selectionModalNav}
		backdrop
		bind:element={drawerElement}>
		<div style="display: flex; flex-direction: row; align-items: center;">
			<div>Press</div>
			<div><GamepadIcon type="ps4" input={GamepadButtons.RIGHT} /></div>
			<div><GamepadIcon type="keyboard_mouse" input={'e'} /></div>
			<div>to close,</div>
		</div>
		<div style="display: flex; flex-direction: row; align-items: center;">
			<div><GamepadIcon type="ps4" input={GamepadButtons.DOWN} /></div>
			<div><GamepadIcon type="keyboard_mouse" input={'r'} /></div>
			<div>to select.</div>
		</div>
		<NavigationDrawerItem
			selected={selectionModalNav === 0}
			onclick={() => {
				selectionModalNav = 0
			}}
			label="Videos"
			badgeLabelText="+100"
		>
			{#snippet icon()}<Icon>videocam</Icon>{/snippet}
		</NavigationDrawerItem>
		<NavigationDrawerItem
			selected={selectionModalNav === 1}
			onclick={() => {
				selectionModalNav = 1
			}}
			label="Styles"
		>
			{#snippet icon()}<Icon>palette</Icon>{/snippet}
		</NavigationDrawerItem>
		<NavigationDrawerItem
			selected={selectionModalNav === 2}
			onclick={() => {
				selectionModalNav = 2
			}}
			label="Settings"
		>
			{#snippet icon()}<Icon>settings</Icon>{/snippet}
		</NavigationDrawerItem>
	</NavigationDrawer>
</DemoContainer>

<Code
	value={`<Button>Open Nav</Button>
	<NavigationDrawer
		id="demo-drawer"
		modal
		bind:selectedIndex={selectionModalNav}
		bind:focussed={selectionModalNav}
		backdrop
		bind:element={drawerElement}>
	<NavigationDrawerItem
		selected={selection === 0}
		onclick={() => {
			selection = 0
		}}
		label="Videos"
		badgeLabelText="+100"
	>
		{#snippet icon()}<Icon>videocam</Icon>{/snippet}
	</NavigationDrawerItem>
	<NavigationDrawerItem
		selected={selection === 1}
		onclick={() => {
			selection = 1
		}}
		label="Styles"
	>
		{#snippet icon()}<Icon>palette</Icon>{/snippet}
	</NavigationDrawerItem>
	<NavigationDrawerItem
		selected={selection === 2}
		onclick={() => {
			selection = 2
		}}
		label="Settings"
	>
		{#snippet icon()}<Icon>settings</Icon>{/snippet}
	</NavigationDrawerItem>
</NavigationDrawer>`}
/>

<DemoContainer>
	<div style="display: grid;grid-template-columns: 1fr;">
		<NavigationDrawer
			selectedIndex={-1}
		 	--np-navigation-drawer-height="200px">
			<NavigationDrawerItem
				selected={selection=== 1}
				onclick={() => {
					selection = 1
				}}
				label="Videos"
				badgeLabelText="+100"
			>
				{#snippet icon()}<Icon>videocam</Icon>{/snippet}
			</NavigationDrawerItem>
			<NavigationDrawerItem
				selected={selection === 2}
				onclick={() => {
					selection = 2
				}}
				label="Styles"
			>
				{#snippet icon()}<Icon>palette</Icon>{/snippet}
			</NavigationDrawerItem>
			<NavigationDrawerItem
				selected={selection === 3}
				onclick={() => {
					selection = 3
				}}
				label="Settings"
			>
				{#snippet icon()}<Icon>settings</Icon>{/snippet}
			</NavigationDrawerItem>
		</NavigationDrawer>
		<div>
			Selected: {selection}
		</div>
	</div>
</DemoContainer>
<Code
	value={`<NavigationDrawer --np-navigation-drawer-height="200px">
  <NavigationDrawerItem
    selected={selection === 1}
    onclick={() => {
      selection = 1
    }}
    label="Videos"
    badgeLabelText="+100"
  >
    {#snippet icon()}<Icon>videocam</Icon>{/snippet}
  </NavigationDrawerItem>
  <NavigationDrawerItem
    selected={selection === 2}
    onclick={() => {
      selection = 2
    }}
    label="Styles"
  >
    {#snippet icon()}<Icon>palette</Icon>{/snippet}
  </NavigationDrawerItem>
  <NavigationDrawerItem
    selected={selection === 3}
    onclick={() => {
      selection = 3
    }}
    label="Settings"
  >
    {#snippet icon()}<Icon>settings</Icon>{/snippet}
  </NavigationDrawerItem>
</NavigationDrawer>`}
/>