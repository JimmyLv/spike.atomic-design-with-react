import { Component } from 'react'
import { themr } from 'react-css-themr'

import { Logo } from '../../atoms'
import { Menu } from '../../molecules'

import defaultTheme from './Header.css'

@themr('ThemedHeader', defaultTheme)
class Header extends Component {
  render() {
    const { theme, logo, children } = this.props
    return (
      <div className={theme['header']}>
        { logo ? <i className={theme['icon']}>{logo}</i> : <Logo />}
        <Menu items={[1, 2, 3]} />
        <span>{children}</span>
      </div>
    )
  }
}

// export default themr('ThemedHeader', defaultTheme)(Header)

export default Header