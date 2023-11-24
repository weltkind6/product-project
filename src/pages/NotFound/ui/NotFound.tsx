import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './NotFound.module.scss'

interface NotFoundProps {
  className?: string

}
export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(styles.NotFound, {}, [])}>
          <h2>{t('Страница не найдена')}</h2>
          <img
              src="https://raw.githubusercontent.com/httpcats/http.cat/master/public/images-original/404.jpg"
              alt="not found"
          />
      </div>
  )
}
