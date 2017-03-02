import styles from './Menu.css'

export default ({ items }) => (
  <ul>{items.map((item, index) =>
    <li key={index} className={styles['item']}>{item}</li>
  )}</ul>
)