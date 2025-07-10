// src/components/Hero.tsx
import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.heroCard}>
      <h1 className={styles.heroTitle}>
        Bienvenido a FlowGenio: domina el conocimiento digital
        <span className={styles.highlight}>
          y conviértelo en ingresos reales💰🚀
        </span>
      </h1>
      <p className={styles.heroSubtitle}>
        Posts, emails, plantillas, prompts, estrategias de marketing…<br />
        Económico, sin código, en segundos y 100% personalizado 🌞
      </p>
      <button
        className={styles.heroCta}
        onClick={() => {
          document
            .getElementById('chatbase-bubble-button')
            ?.click()
        }}
      >
        Pruébalo gratis
      </button>
    </div>
  </section>
)

export default Hero
