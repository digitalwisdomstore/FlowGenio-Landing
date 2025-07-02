import React from 'react';
import styles from './Features.module.css';
import { Cpu, Calendar, PieChart, MessageSquare } from 'lucide-react';

const features = [
  {
    Icon: Cpu,
    title: 'Generador de Contenido AI',
    desc: 'Posts, blogs y copys en segundos, optimizados para LATAM.',
  },
  {
    Icon: Calendar,
    title: 'Calendario Automatizado',
    desc: 'Planificá y programá tus publicaciones sin esfuerzo.',
  },
  {
    Icon: PieChart,
    title: 'Análisis de Audiencia',
    desc: 'Insights y recomendaciones para crecer tu comunidad.',
  },
  {
    Icon: MessageSquare,
    title: 'Chatbot 24/7',
    desc: 'Atendé a tus clientes y seguidores con IA integrada.',
  },
];

const Features: React.FC = () => (
  <section className={styles.features}>
    <div className={styles.container}>
      <h2 className={styles.heading}>Todo lo que necesitás</h2>
      <div className={styles.grid}>
        {features.map(({ Icon, title, desc }) => (
          <div key={title} className={styles.card}>
            <Icon size={36} className={styles.icon} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
