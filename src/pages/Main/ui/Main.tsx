import { useTranslation } from 'react-i18next'
import {Counter} from "app/entities/Counter";

const Main = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h2>{JSON.stringify(t('Главная'))}</h2>
            <div>{JSON.stringify(t('Это тестовый перевод для тренировки'))}</div>
            <div>{JSON.stringify(t('Для этого перевода пока что нет ключа'))}</div>
            <Counter />
        </div>
    )
}

export default Main
