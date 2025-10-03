import { LitElement } from "lit"
import { customElement } from "lit/decorators.js"


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("sb-auth")
export class SbAuth extends LitElement {
    /**
     * Copy for the read the docs hint.
     */
    // @property()
    // docsHint = "Read the docs"

    /**
     * The number of times the button has been clicked.
     */
    // @property({ type: Number })
    // count = 0

    // render() {
    //     return html`
    //         </div>
    //         <slot></slot>
    //         <div class="card">
    //             <button @click=${this._onClick} part="button">
    //             count is ${this.count}
    //             </button>
    //         </div>
    //     `
    // }

    // private _onClick() {
    //     this.count++
    // }

    // static styles = css`
    // `
}

declare global {
    interface HTMLElementTagNameMap {
        "sb-auth": SbAuth
    }
}
