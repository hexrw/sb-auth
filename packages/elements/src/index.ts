import r2wc from "@r2wc/react-to-web-component"
import {
    ForgottenPassword as ForgottenPasswordReact,
    UpdatePassword as UpdatePasswordReact,
    MagicLink as MagicLinkReact
} from "./auth-ui-react/react/src/components/Auth/index"
import { UserContextProvider as UserContextProviderReact } from "./auth-ui-react/react/src/components/Auth/UserContext"

const ForgottenPassword = r2wc(ForgottenPasswordReact)
const UpdatePassword = r2wc(UpdatePasswordReact)
const MagicLink = r2wc(MagicLinkReact)
const UserContextProvider = r2wc(UserContextProviderReact)

export const register = () => {
    customElements.define("sb-auth-forgotten-password", ForgottenPassword)
    customElements.define("sb-auth-update-password", UpdatePassword)
    customElements.define("sb-auth-magic-link", MagicLink)
    customElements.define("sb-auth-user-context-provider", UserContextProvider)
}
