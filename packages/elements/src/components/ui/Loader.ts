import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { generateClassNames } from '@supabase/auth-ui-shared';
import { Appearance } from '../../types';

@customElement('sb-auth-loader')
export class LoaderComponent extends LitElement {
    @property({ type: Object }) appearance?: Appearance;

    static styles = css`
        .loader {
            border-radius: 50%;
            width: 10em;
            height: 10em;
            margin: 60px auto;
            font-size: 10px;
            position: relative;
            text-indent: -9999em;
            border-top: 1.1em solid rgba(255, 255, 255, 0.2);
            border-right: 1.1em solid rgba(255, 255, 255, 0.2);
            border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
            border-left: 1.1em solid #ffffff;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation: load8 1.1s infinite linear;
            animation: load8 1.1s infinite linear;
        }

        .loader:after {
            border-radius: 50%;
            width: 10em;
            height: 10em;
        }

        @-webkit-keyframes load8 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @keyframes load8 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    `;

    render() {
        const classNames = generateClassNames('loader', "", this.appearance);

        return html`
            <div
                style=${this.appearance?.style?.loader}
                class=${classNames.join(' ')}
            ></div>
        `;
    }
}
