import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

import styles from './PageError.module.scss'

export const PageError = () => {
    const { t } = useTranslation()

    const reloadPageHandler = () => {
        location.reload()
    }

    return (
        <div className={classNames(styles.PageError, {}, [])}>
            <h1>
                {t('Произошла непредвиденная ошибка!')}
            </h1>
            <img
                src="https://static9.tgcnt.ru/posts/_0/29/29464aa629986201f22bed32f420f80e.jpg"
                alt="error-img"
            />
            <Button onClick={reloadPageHandler}>{t('Перезагрузить страницу')}</Button>
        </div>
    )
}
