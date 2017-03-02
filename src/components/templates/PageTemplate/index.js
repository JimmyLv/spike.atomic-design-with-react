import styles from './index.css'

export default ({ header, hero, children, footer, ...props }) => (
  <div className={styles['wrapper']} {...props}>
    <header className={styles['header']}>
      {header}
    </header>
    {hero && <section>{hero}</section>}
    <section className={styles['main']}>
      {children}
    </section>
    <footer className={styles['footer']}>
      {footer}
    </footer>
  </div>
)