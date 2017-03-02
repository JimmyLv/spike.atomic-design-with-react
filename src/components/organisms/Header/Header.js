import styles from './Header.css'
import { Logo } from '../../atoms'
import { Menu } from '../../molecules'

export default () => (
  <div className={styles['header']}>
    <Logo />
    <Menu items={[1, 2, 3]}/>
  </div>
)