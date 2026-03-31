import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.title}>Finyo</h3>
            <p className={styles.tagline}>The Financial Yogi</p>
            <p className={styles.disclaimer}>
              Finyo is not a regulated financial adviser. Content provided is for
              educational and informational purposes only and does not constitute
              financial advice. Please seek independent regulated advice before
              making any financial decisions.
            </p>
          </div>

          <nav className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Finyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
