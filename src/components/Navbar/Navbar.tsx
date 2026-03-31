import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname === path

  const handleServicesClick = () => {
    if (location.pathname === '/') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#services')
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Finyo - The Financial Yogi" />
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={styles.desktopNav}>
            <li>
              <Link to="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <button className={styles.link} onClick={handleServicesClick}>
                Services
              </button>
            </li>
            <li>
              <Link to="/contact" className={`${styles.link} ${isActive('/contact') ? styles.active : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <button className={styles.link} onClick={handleServicesClick}>
              Services
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${styles.link} ${isActive('/contact') ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
