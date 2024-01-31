import './Header.css'
import logo from '@/assets/images/logo.svg'
import Search from '@/components/user/Search/Search'

const Header = () => {
  return (
    <header>
      <a href="/">
        <img className='logo' src={logo} alt="contributree logo" />
      </a>
      <Search />
    </header>
  )
}

export default Header;