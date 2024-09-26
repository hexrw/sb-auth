import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { generateClassNames } from '@supabase/auth-ui-shared'
import { Appearance } from '../../types'

const dividerDefaultStyles = css`
    background: $dividerBackground;
    display: block;
    margin: 16px 0;
    height: 1px;
    width: 100%;
`

@customElement("sb-auth-divider")
class Divider extends LitElement {
    @property({ type: String }) appearance?: Appearance

    render() {
        const classNames = generateClassNames('divider', dividerDefaultStyles.cssText, this.appearance)

        return html`
            <div
                style=${this.appearance?.style?.divider}
                class=${classNames.join(' ')}
            ></div>
        `
    }
}

export { Divider }
