import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h2>{t('Главная')}</h2>
            <div>{t('Это тестовый перевод для тренировки')}</div>
            <div>{t('Для этого перевода пока что нет ключа')}</div>
        </div>
    )
}

export default Main
