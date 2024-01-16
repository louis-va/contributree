import './Header.css'
import logo from '@/assets/images/logo.svg'

const Header = () => {
  return (
    <header>
      <a href="/">
        <img className='logo' src={logo} alt="contributree logo" />
      </a>
      <a href="https://github.com/louis-va/contributree">
        Github
      </a>
    </header>
  )
}

export default Header;