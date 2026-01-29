<script lang="ts">
	import { page } from '$app/state'
	import { Divider, NavigationDrawerItem } from 'noph-ui'
	let {
		onclose,
	}: {
		onclose?: () => void
	} = $props()
</script>

<div class="header">About</div>
<NavigationDrawerItem
	onclick={onclose}
	label="Quick Start"
	href="/about/quick-start"
	selected={page.url.pathname === '/about/quick-start'}
/>
<div class="header">Components</div>
<NavigationDrawerItem
	onclick={onclose}
	label="Button"
	href="/components/button"
	selected={page.url.pathname === '/components/button'}
/>
<NavigationDrawerItem
	onclick={onclose}
	label="IconButton"
	href="/components/icon-button"
	selected={page.url.pathname === '/components/icon-button'}
/>
<NavigationDrawerItem
	onclick={onclose}
	label="Slider"
	href="/components/slider"
	selected={page.url.pathname === '/components/slider'}
/>
<NavigationDrawerItem
	onclick={onclose}
	label="Switch"
	href="/components/switch"
	selected={page.url.pathname === '/components/switch'}
/>
<style>
	.header {
		margin: 1rem 0 1rem 1.75rem;
		font-size: 1.5rem;
	}
</style>
