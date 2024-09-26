import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { generateClassNames } from '@supabase/auth-ui-shared';
import { Appearance } from '../../types';

const inputDefaultStyles = css`
    font-family: var(--inputFontFamily);
    background: var(--inputBackground);
    border-radius: var(--inputBorderRadius);
    padding: var(--inputPadding);
    cursor: text;
    border-width: var(--inputBorderWidth);
    border-color: var(--inputBorder);
    border-style: solid;
    font-size: var(--baseInputSize);
    width: 100%;
    color: var(--inputText);
    box-sizing: border-box;
    &:hover {
        border-color: var(--inputBorderHover);
        outline: none;
    }
    &:focus {
        border-color: var(--inputBorderFocus);
        outline: none;
    }
    &::placeholder {
        color: var(--inputPlaceholder);
        letter-spacing: initial;
    }
    transition-property: background-color, border;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 100ms;
    --type-default: {
        letter-spacing: 0px;
    };
    --type-password: {
        letter-spacing: 0px;
    };
`;

@customElement('sb-auth-input')
class Input extends LitElement {
    @property({ type: String }) type: 'text' | 'password' | 'email' = 'text';
    @property({ type: Object }) appearance?: Appearance;

    render() {
        const classNames = generateClassNames(
            'input',
            inputDefaultStyles.cssText,
            this.appearance
        );

        return html`
            <input
                type=${this.type === 'password' ? 'password' : 'default'}
                style=${this.appearance?.style?.input}
                class=${classNames.join(' ')}
            ></input>
        `;
    }
}

export { Input };
