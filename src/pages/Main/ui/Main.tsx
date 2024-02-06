import {Counter} from "app/entities/Counter";
import {translator} from "helpers/translator/translator";
import { useTranslation } from 'react-i18next'

const Main = () => {
    const {} = useTranslation();

    return (
        <div>
            <h2>{translator('Главная')}</h2>
            <Counter />
        </div>
    )
}

export default Main
