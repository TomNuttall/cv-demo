import { useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import { User } from '../../assets/icons'

import './Header.css'

type HeaderLink = {
  name: string
  src: string
}

type HeaderProps = {
  links: HeaderLink[]
  name: string
}

const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  links,
  name,
  children,
}) => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const match = links.find((link) => link.src.includes(pathname))
    if (match) {
      document.title = `${name} - ${match.name}`
    }
  }, [pathname, name, links])

  const titleName = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')

  return (
    <header className="header">
      <a className="header__skip-content" href="#main-content">
        Skip to main content
      </a>
      <div className="header__content">
        <div className="header__logo">
          <User title="user" />
          {titleName}
        </div>
        <nav className="header__nav">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={`${link.src}${search}`}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {children}
    </header>
  )
}

export default Header
