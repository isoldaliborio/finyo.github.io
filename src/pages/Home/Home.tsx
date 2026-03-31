import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Services />
    </main>
  )
}
