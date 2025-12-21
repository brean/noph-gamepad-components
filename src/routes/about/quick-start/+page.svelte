<script>
  import Code from "../../../Code.svelte";
</script>

<svelte:head>
	<title>Quick Start - Noph UI</title>
</svelte:head>

<h1>Quick Start</h1>
<h2>Install</h2>
<p>Install Noph UI and Noph Gamepad Components components using npm and node.</p>
<Code value="npm install noph-ui noph-gamepad-components" />

Take a look at the <u><a href="https://noph.dev/about/quick-start">noph-ui quick-start page</a></u> to setup Noph UI.

<h2>Setup</h2>
<p>
	You need to at least include the InputManager of svelte-gamepad-virtual-joystick. 
</p>
<Code value={"<script" + ">\nimport { InputManager } from 'svelte-gamepad-virtual-joystick';\n</script>\n<InputManager />"}
/>
<p>
	See +layout.svelte of this repo for a usage example. TODO: create more details!
</p>