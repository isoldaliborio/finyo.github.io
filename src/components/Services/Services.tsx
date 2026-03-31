import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Services.module.scss'

const services = [
  {
    title: 'Financial Education | Paraplanner',
    market: 'United Kingdom',
    description:
      'Build confidence and knowledge around your personal finances. Through tailored sessions, you will develop the skills to make better and informed financial decisions, create sustainable budgets, and work towards your goals with clarity.',
    features: [
      'One-to-one sessions',
      'Personalised strategy financial report',
      'Budgeting and saving strategies',
      'Investiment education',
      'Debt management guidance',
      'We provide strategic planning only; no regulated financial advice or product recommendation',
    ],
  },
  {
    title: 'Financial Planning',
    market: 'Brazil',
    description:
      'Comprehensive financial planning designed for your unique goals and circumstances. From investment strategies to retirement planning, get expert guidance to build and protect your wealth over the long term.',
    features: [
      'Personalised financial plan',
      'Investment strategy guidance',
      'Retirement planning',
      'Wealth building roadmap',
      'We provide strategic planning only; no regulated financial advice or product recommendation',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How I can help you</h2>
          <p className={styles.subtitle}>
            Tailored financial guidance for wherever you are on your journey.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <span className={styles.market}>{service.market}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles.check}>&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="secondary">Get in touch</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
