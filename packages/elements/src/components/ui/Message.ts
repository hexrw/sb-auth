import { css, CSSResultGroup, html, LitElement, PropertyValues, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { generateClassNames } from '@supabase/auth-ui-shared'
import { Appearance } from '../../types'

const messageDefaultStyles = css`
    :host {
        font-family: var(--bodyFontFamily);
        font-size: var(--baseInputSize);
        margin-bottom: var(--labelBottomMargin);
        display: block;
        text-align: center;
        border-radius: 0.375rem;
        padding: 1.5rem 1rem;
        line-height: 1rem;
        color: var(--messageText);
        background-color: var(--messageBackground);
        border: 1px solid var(--messageBorder);
    }

    :host([color="danger"]) {
        color: var(--messageTextDanger);
        background-color: var(--messageBackgroundDanger);
        border: 1px solid var(--messageBorderDanger);
    }
`

@customElement('sb-auth-message')
class Message extends LitElement {
    @property({ type: String }) color?: 'danger'
    @property({ type: String }) appearance?: Appearance

    static styles: CSSResultGroup = [messageDefaultStyles]

    render(): TemplateResult {
        const classNames = generateClassNames(
            'message',
            messageDefaultStyles.cssText,
            this.appearance
        )

        return html`
            <span
                style=${this.appearance?.style?.message}
                class=${classNames.join(' ')}
            >
                ${this.children}
            </span>
        `
    }

    updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties)
        // Handle property changes here if needed
    }
}

export { Message }
