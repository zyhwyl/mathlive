/* 0.98.5 *//**
 *
 * Importing this package in a web page will make the `<math-field>` custom
 * element available. Use it as a drop-in replacement for `<textarea>` or
 * `<input type="text">` to allow the user to type and edit mathematical
 * expressions.
 *
 *
 * @example
 *
 * ```html
 * <script src="https://unpkg.com/mathlive"></script>
 * <math-field>\frac{1}{2}</math-field>
 * <script>
 * const mf = document.querySelector('math-field');
 * mf.addEventListener('input', (ev) => {
 *  console.log('New value:', mf.value);
 * });
 * </script>
 * ```
 *
 * @packageDocumentation MathLive SDK Reference
 * @version 0.98.5
 *
 */
import type { VirtualKeyboardOptions } from './virtual-keyboard';
import type { VirtualKeyboardInterface } from './virtual-keyboard';
import type { StaticRenderOptions } from './options';
import { Atom } from 'core/atom-class';
import { ContextInterface } from 'core/types';
import { MathstyleName, ParseMode, Style } from './core-types';
export * from './commands';
export * from './core-types';
export * from './options';
export * from './mathfield';
export * from './mathfield-element';
export * from './mathlive-ssr';
export * from './virtual-keyboard';
export declare function makeSharedVirtualKeyboard(options?: Partial<VirtualKeyboardOptions>): VirtualKeyboardInterface & EventTarget;
export declare function renderMathInDocument(options?: StaticRenderOptions): void;
export declare function renderMathInElement(element: string | HTMLElement, options?: StaticRenderOptions): void;
export declare const version: {
    mathlive: string;
};
export declare function parseLatex(s: string, options?: {
    context?: ContextInterface;
    parseMode?: ParseMode;
    args?: (arg: string) => string | undefined;
    mathstyle?: MathstyleName;
    style?: Style;
}): Atom[];
export declare function atomsToLatex(atoms: Atom[]): string;
export { Atom };
declare global {
    interface Window {
        mathVirtualKeyboard: VirtualKeyboardInterface & EventTarget;
    }
}
