import {t} from "i18next";

export function translator(key: string): string {
    const translation = t(key);
    if (typeof translation === 'object') {
        return JSON.stringify(translation);
    }
    return translation;
}

