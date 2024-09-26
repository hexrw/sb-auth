import { BaseAppearance, BaseAuth } from "@supabase/auth-ui-shared"

export interface Appearance extends BaseAppearance {
    style?: {
        anchor?: CSSPropertyRule
        button?: CSSPropertyRule
        container?: CSSPropertyRule
        divider?: CSSPropertyRule
        input?: CSSPropertyRule
        label?: CSSPropertyRule
        loader?: CSSPropertyRule
        message?: CSSPropertyRule
    }
}

export interface Auth extends BaseAuth {
    children?: HTMLElement
    appearance?: Appearance
}
