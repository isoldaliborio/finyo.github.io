import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import profilePic from '../../assets/profile-pic.png'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Your path to <span className={styles.highlight}>financial clarity</span> starts here
          </h1>
          <p className={styles.subtitle}>
            Hi, I'm Isolda Liborio — a financial educator, planner helping
            individuals build confidence with money. Whether you're in the UK
            seeking financial education or in Brazil looking for expert financial
            planning, I'm here to guide you.
          </p>
          <div className={styles.actions}>
            <Link to="/contact">
              <Button variant="primary">Book a consultation</Button>
            </Link>
            <a href="#services">
              <Button variant="outline">Explore services</Button>
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageDecor}>
            <img src={profilePic} alt="Isolda Liborio" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  )
}
