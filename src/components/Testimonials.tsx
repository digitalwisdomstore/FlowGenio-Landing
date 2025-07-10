// src/components/Testimonials.tsx
import React from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'María López',
    role: 'Influencer de Viajes',
    avatar: '/avatars/maria.jpg',
    quote: '¡FLOWgenio triplicó mi engagement en Instagram en 1 semana!',
  },
  {
    name: 'Juan Pérez',
    role: 'Freelancer UX/UI',
    avatar: '/avatars/juan.jpg',
    quote: 'Ahora genero propuestas y newsletters en segundos con AI.',
  },
  {
    name: 'Ana Gómez',
    role: 'Emprendedora eCommerce',
    avatar: '/avatars/ana.jpg',
    quote: 'Las plantillas y el chatbot me ahorran horas de trabajo diario.',
  },
]

const Testimonials: React.FC = () => (
  <section className={styles.testimonials}>
    <div className={styles.container}>
      <h2 className={styles.heading}>Lo que dicen nuestros usuarios</h2>
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.card}>
            <img src={t.avatar} alt={t.name} className={styles.avatar} />
            <p className={styles.quote}>"{t.quote}"</p>
            <p className={styles.name}>{t.name}</p>
            <p className={styles.role}>{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
