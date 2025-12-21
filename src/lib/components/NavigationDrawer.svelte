<script lang="ts">
  import {NavigationDrawer, NavigationDrawerItem, Button} from 'noph-ui'
  import Icon from '$lib/noph_ext/Icon.svelte';
  let selection = $state(1);
</script>
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