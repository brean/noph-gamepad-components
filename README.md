# Svelte Material3 UI Gamepad components 
Using [noph](https://noph.dev/) components with [svelte-gamepad-virtual-joystick](https://github.com/brean/svelte-gamepad-virtual-joystick)

## Application
Use Material 3 (noph.dev) with joystick controls to control robots or build prototype games.

## Installation and usage
This library can be installed using npm:
```
npm i -D noph-gamepad-components
```

To use it in your project, you can simply switch most of the noph-components with the ones in this repository, Button should be a straight forward replacement for your noph-components as its are just wrapper around it.

This shows the normal button but now you can also activate it by pressing 'e' on your keyboard or the first button on a connected gamepad ("X" on the Playstation 4 Dual Shock-controller).
If you want to change that behavior just provide an `input_mapping` (take a look at the example application).

Don't forget to also add the `InputManager` from svelte-gamepad-virtual-joystick.

## Example
A usage example with multiple components can be seen in routs/+page.svelte,

To view this example run
```
npm run dev
```

## Supported Components
