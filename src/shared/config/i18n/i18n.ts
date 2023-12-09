import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// const PRODUCTION = process.env.NODE_ENV === 'production';

i18n
// plugins
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    // default lang
        fallbackLng: 'en',
        // console errors
        debug: PRODUCTION,

        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        // Для подгрузки переводов в разных чанках
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    })

export default i18n
