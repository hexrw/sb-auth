import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { generateClassNames } from '@supabase/auth-ui-shared';
import { Appearance } from '../../types';

const anchorHTMLAttributes = css`
    font-family: var(--bodyFontFamily);
    font-size: var(--baseBodySize);
    margin-bottom: var(--anchorBottomMargin);
    color: var(--anchorTextColor);
    display: block;
    text-align: center;
    text-decoration: underline;

    &:hover {
        color: var(--anchorTextHoverColor);
    }
`;

@customElement('sb-auth-anchor')
class Anchor extends LitElement {
    @property({ type: String }) appearance?: Appearance;

    render() {
        const classNames = generateClassNames('anchor', anchorHTMLAttributes.cssText, this.appearance);

        return html`
            <a
                style="${this.appearance?.style?.anchor}"
                class="${classNames.join(' ')}"
            >
                <slot></slot>
            </a>
        `;
    }
}

export { Anchor };
