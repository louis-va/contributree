import './Footer.css'
import logo from '@/assets/images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <a href="/">
        <img className='logo' src={logo} alt="contributree logo" />
      </a>
      <p>
        ©Contributree. <a href='https://github.com/louis-va/contributree'>Star the Github repo</a>.
      </p>
      <p>
        Made by <a href='https://github.com/louis-va'>louis-va</a>.
      </p>
    </footer>
  )
}

export default Footer;