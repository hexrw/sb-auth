import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { generateClassNames } from '@supabase/auth-ui-shared'
import { Appearance } from '../../types'

const containerDefaultStyles = css`
    display: flex;
    gap: 4px;

    --direction-horizontal: {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
    };

    --direction-vertical: {
        flex-direction: column;
        margin: 8px 0;
    };

    --gap-small: {
        gap: 4px;
    };

    --gap-medium: {
        gap: 8px;
    };

    --gap-large: {
        gap: 16px;
    };
`

@customElement('sb-auth-container')
export class Container extends LitElement {
    @property({ type: String }) direction?: 'horizontal' | 'vertical'
    @property({ type: String }) gap?: 'small' | 'medium' | 'large'
    @property({ type: Object }) appearance?: Appearance

    render() {
        const classNames = generateClassNames(
            'container',
            [ containerDefaultStyles.cssText,
            this.direction && `--direction-${this.direction}`,
            this.gap && `--gap-${this.gap}` ].join(' '),
            this.appearance
        )

        return html`
            <div
                style=${this.appearance?.style?.container}
                class=${classNames.join(' ')}
            >
                <slot></slot>
            </div>
        `
    }
}
