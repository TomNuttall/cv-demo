import { useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/clerk-react'

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

const Header: React.FC<HeaderProps> = ({ links, name }) => {
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
      <div className="header__login">
        <SignedOut>
          <SignInButton>
            <button className="button">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <SignOutButton redirectUrl="/">
            <button className="button">Sign Out</button>
          </SignOutButton>
        </SignedIn>
      </div>
    </header>
  )
}

export default Header
