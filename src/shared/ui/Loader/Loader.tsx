import { classNames } from 'helpers/classNames/classNames'
import { Preloader } from 'widgets/Preloader/Preloader'

import styles from './Loader.module.scss'

interface LoaderProps {
  className?: string

}
export const Loader = ({ className }: LoaderProps) => {
  return (
      <div className={classNames(styles.Loader, {}, [])}>
          <Preloader />
      </div>
  )
}
