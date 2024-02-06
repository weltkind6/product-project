import { classNames } from 'helpers/classNames/classNames'
import {translator} from "helpers/translator/translator";
import { Button } from 'shared/ui/Button/Button'

import styles from './PageError.module.scss'

export const PageError = () => {
    const reloadPageHandler = () => {
        location.reload()
    }

    return (
        <div className={classNames(styles.PageError, {}, [])}>
            <h1>
                {translator('Произошла непредвиденная ошибка!')}
            </h1>
            <img
                src="https://static9.tgcnt.ru/posts/_0/29/29464aa629986201f22bed32f420f80e.jpg"
                alt="error-img"
            />
            <Button onClick={reloadPageHandler}>{translator('Перезагрузить страницу')}</Button>
        </div>
    )
}
