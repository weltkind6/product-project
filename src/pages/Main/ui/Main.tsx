import React from 'react';
import {useTranslation} from "react-i18next";

const Main = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('Главная')}</h2>
        </div>
    );
};

export default Main;
