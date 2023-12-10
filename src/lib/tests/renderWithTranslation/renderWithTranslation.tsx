import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nFotTests from "shared/config/i18n/i18nFotTests";

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nFotTests}>
            {component}
        </I18nextProvider>
    )
}
