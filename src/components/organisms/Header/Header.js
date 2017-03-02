import styles from './Header.css'
import { Logo } from '../../atoms'
import { MenuBar } from '../../molecules'

export default () => (
  <div className={styles['header']}>
    <Logo />
    <MenuBar menus={[1, 2, 3]}/>
  </div>
)