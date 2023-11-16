import React from 'react';
import {useTranslation} from "react-i18next";
import './LangSwitcher.module.scss';
import {Button} from "shared/ui/Button/Button";
import styles from './LangSwitcher.module.scss';
import {classNames} from "helpers/classNames/classNames";

export const LangSwitcher = () => {
    const {t, i18n} = useTranslation();

    const translateHandler = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
            .then(r => r)
    }

    return (
        <Button
        className={classNames(styles.LangSwitcher, {}, [])}
            onClick={translateHandler}
        >
            {t('RU')}
        </Button>
    )
};
