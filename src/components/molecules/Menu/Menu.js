import styles from './Menu.css'

export default ({ items }) => (
  <div>{items.map((item, index) =>
    <span key={index} className={styles['item']}>{item}</span>
  )}</div>
)