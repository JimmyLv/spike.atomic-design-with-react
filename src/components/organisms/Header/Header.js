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
        <span className={theme['logo']}>{ logo ? <i className={theme['icon']}>{logo}</i> : <Logo />}</span>
        <Menu items={['Home', 'Blog', 'Photo']} />
        <span>{children}</span>
      </div>
    )
  }
}

// export default themr('ThemedHeader', defaultTheme)(Header)

export default Header