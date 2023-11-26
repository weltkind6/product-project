import { classNames } from 'helpers/classNames/classNames'

import styles from './PageError.module.scss'

interface PageErrorProps {
  className?: string

}
export const PageError = ({ className }: PageErrorProps) => {
  return (
      <div className={classNames(styles.PageError, {}, [])}>
          <h1>
              Произошла непредвиденная ошибка!
          </h1>
          <img
              src="https://static9.tgcnt.ru/posts/_0/29/29464aa629986201f22bed32f420f80e.jpg"
              alt="error-img"
          />
      </div>
  )
}
