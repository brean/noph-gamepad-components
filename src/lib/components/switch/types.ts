import type { SwitchProps as NophSwitchProps } from "noph-ui/types";
import type { ButtonInput } from "svelte-gamepad-virtual-joystick";

export interface SwitchProps extends Omit<NophSwitchProps, 'type' | 'role' | 'checked' | 'indeterminate'> {
    // Gamepad Button
    onpressed?: () => void,  // only once when the pressed-state changes
    onhold?: () => void,   // every event while the button is pressed
    onrelease?: () => void,
    inputMapping?: ButtonInput,
    cssclassWrapper?: string,
    context?: string[],
    requiresFocus?: boolean
}