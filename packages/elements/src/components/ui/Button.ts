import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { generateClassNames } from '@supabase/auth-ui-shared'
import { Appearance } from '../../types'

const buttonDefaultStyles = css`
    :host {
        font-family: var(--buttonFontFamily);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: var(--borderRadiusButton);
        font-size: var(--baseButtonSize);
        padding: var(--buttonPadding);
        cursor: pointer;
        border-width: var(--buttonBorderWidth);
        border-style: solid;
        width: 100%;

        transition-property: background-color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 100ms;
    }

    :host([disabled]) {
        opacity: 0.7;
        cursor: unset;
    }

    :host([color="default"]) {
        background-color: var(--defaultButtonBackground);
        color: var(--defaultButtonText);
        border-color: var(--defaultButtonBorder);
    }

    :host([color="default"]:hover:not([disabled])) {
        background-color: var(--defaultButtonBackgroundHover);
    }

    :host([color="primary"]) {
        background-color: var(--brand);
        color: var(--brandButtonText);
        border-color: var(--brandAccent);
    }

    :host([color="primary"]:hover:not([disabled])) {
        background-color: var(--brandAccent);
    }
`

@customElement('sb-auth-button')
class Button extends LitElement {
    @property({ type: String }) color: 'default' | 'primary' = 'default';
    @property({ type: Object }) appearance?: Appearance
    @property({ type: Boolean }) loading = false;

    static styles = buttonDefaultStyles;

    render() {
        const classNames = generateClassNames(
            'button',
            [
                buttonDefaultStyles.cssText,
                { color: this.color },
            ].join(' '),
            this.appearance
        )

        return html`
            <button
                ?disabled=${this.loading}
                style=${this.appearance?.style?.button}
                class=${classNames.join(' ')}
            >
                <slot></slot>
            </button>
        `
    }
}

export { Button }
