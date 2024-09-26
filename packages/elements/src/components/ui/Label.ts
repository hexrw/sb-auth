import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { generateClassNames } from '@supabase/auth-ui-shared'
import { Appearance } from '../../types'

const labelDefaultStyles = css`
    font-family: var(--labelFontFamily);
    font-size: var(--baseLabelSize);
    margin-bottom: var(--labelBottomMargin);
    color: var(--inputLabelText);
    display: block;
`

@customElement('sb-auth-label')
class Label extends LitElement {
    @property({ type: String }) appearance?: Appearance

    render() {
        const classNames = generateClassNames('label', labelDefaultStyles.cssText, this.appearance)

        return html`
            <label
                style="${this.appearance?.style?.label}"
                class="${classNames.join(' ')}"
            >
                <slot></slot>
            </label>
        `
    }
}

export { Label }
