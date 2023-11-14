import React, {Suspense} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";
import './styles/index.scss'

const TestCompontns = () => {
    const { t, i18n } = useTranslation();

    const translateHandler = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
            .then(r => r)
    }

    return (
        <div>
            <button onClick={translateHandler}>
                {t('Перевод')}
            </button>
            <h1>{t('Тестовый пример перевода')}</h1>
        </div>
    )
}
const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <TestCompontns />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
