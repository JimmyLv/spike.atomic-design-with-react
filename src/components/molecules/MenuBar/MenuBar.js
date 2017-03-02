export default ({ menus }) => (
  <div>{menus.map((item, index) => <span key={index}>{item}</span>)}</div>
)