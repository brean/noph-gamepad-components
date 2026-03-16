<script lang="ts">
	import Icon from '$lib/noph_ext/Icon.svelte';
	import NavigationDrawer from '$lib/components/navigation-drawer/NavigationDrawer.svelte'
	import { NavigationDrawerItem } from 'noph-ui';
    import Button from '$lib/components/button/Button.svelte';
    import Code from '../../../Code.svelte';
    import DemoContainer from '../../../DemoContainer.svelte';
	let selection = $state(1)
</script>

<svelte:head>
	<title>Navigation Drawer - Noph UI</title>
</svelte:head>

<h1>Navigation Drawer</h1>
<h2>Usage</h2>

<DemoContainer>
	<Button popovertarget="demo-drawer">Open Nav</Button>
	<NavigationDrawer id="demo-drawer" modal backdrop>
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
	</NavigationDrawer>
</DemoContainer>

<Code
	value={`<Button popovertarget="demo-drawer">Open Nav</Button>
<NavigationDrawer id="demo-drawer" modal backdrop>
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

<DemoContainer>
	<NavigationDrawer --np-navigation-drawer-height="200px">
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
	</NavigationDrawer>
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