import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bienvenido a FlowGenio: domina el
        conocimiento digital y conviértelo en
        ingresos reales💰🚀
      </h1>
      <p className={styles.subtitle}>
        Posts, emails, plantillas, prompts, estrategias de marketing ... <br/>
      Económico, sin código, en segundos y 100% personalizado 🌞
      </p>
      <button className={styles.cta} onClick={() => {
        document.getElementById('chatbase-bubble-button')?.click();
      }}>
        Pruébalo gratis
      </button>
    </div>
  </section>
);

export default Hero;
