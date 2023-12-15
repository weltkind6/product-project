import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {classNames} from "helpers/classNames/classNames";

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const translateHandler = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
            .then(r => r)
    }

    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={translateHandler}
        >
            {t('RU')}
        </Button>
    )
};
