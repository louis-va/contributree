import './Footer.css'
import logo from '@/assets/images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <a href="/">
        <img className='logo' src={logo} alt="contributree logo" />
      </a>
      <p>
        ©2024 Contributree by <a href='https://github.com/louis-va'>louis-va</a> • <a href='https://github.com/louis-va/contributree'>Github</a>
      </p>
    </footer>
  )
}

export default Footer;