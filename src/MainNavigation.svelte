<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths'
	import { Divider, NavigationDrawerItem } from 'noph-ui';
	let {
		onclose,
	}: {
		onclose?: () => void
	} = $props();

	const isActive = (path: string) => page.url.pathname.endsWith(path);
</script>

<div class="header">About</div>
<NavigationDrawerItem
	onclick={onclose}
	label="Quick Start"
	href={resolve('/about/quick-start')} 
	selected={isActive('/about/quick-start')}
/>
<div class="header">Components</div>
<NavigationDrawerItem
	onclick={onclose}
	label="Button"
	href={resolve('/components/button')}
	selected={isActive('/components/button')}
/>
<NavigationDrawerItem
	onclick={onclose}
	label="IconButton"
	href={resolve('/components/icon-button')}
	selected={isActive('/components/icon-button')}
/>
<NavigationDrawerItem
	onclick={onclose}
	label="Slider"
	href={resolve('/components/slider')}
	selected={isActive('/components/slider')}
/>
<NavigationDrawerItem
	onclick={onclose}
	label="NavigationDrawer"
	href={resolve('/components/navigation-drawer')}
	selected={isActive('/components/navigation-drawer')}
/>
<NavigationDrawerItem
	onclick={onclose}
	label="Switch"
	href={resolve('/components/switch')}
	selected={isActive('/components/switch')}
/>
<style>
	.header {
		margin: 1rem 0 1rem 1.75rem;
		font-size: 1.5rem;
	}
</style>
