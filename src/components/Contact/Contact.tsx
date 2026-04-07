import Button from '../Button/Button'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let's talk about your goals</h2>
          <p className={styles.subtitle}>
            Whether you have a question or you're ready to get started, I'd love to
            hear from you.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>&#9993;</div>
            <h3>Send an email</h3>
            <p>Drop me a message and I'll get back to you within 24 hours.</p>
            <Button
              variant="outline"
              href="mailto:hello@finyo.co.uk"
            >
              hello@finyo.co.uk
            </Button>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>&#128197;</div>
            <h3>Book an appointment</h3>
            <p>Schedule a free introductory call to discuss your financial goals.</p>
            <Button
              variant="primary"
              href="https://calendly.com"
            >
              Book a free call
            </Button>
          </div>
        </div>

        <div className={styles.calendly}>
          <h3 className={styles.calendlyTitle}>Schedule directly</h3>
          <div className={styles.calendlyEmbed}>
            <p className={styles.placeholder}>
              Calendly booking widget will be embedded here.
              <br />
              <span>Replace this with your Calendly inline embed code.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
