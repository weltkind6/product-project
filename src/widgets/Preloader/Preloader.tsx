import styles from './Preloader.module.scss'

interface PreloaderProps {
  className?: string

}
export const Preloader = ({ className }: PreloaderProps) => {
  return (
      <div className={styles.ldsDefault}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
      </div>
  )
}
