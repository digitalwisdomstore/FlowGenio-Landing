import React from 'react';
import styles from './InfluencerToolkit.module.css';
import { Camera, BarChart2, Users } from 'lucide-react';

const items = [
  { Icon: Camera, title: 'Plantillas visuales', desc: 'Posts, stories y reels listos en segundos.' },
  { Icon: BarChart2, title: 'Métricas clave', desc: 'Aprendé a medir tu engagement y crecer.' },
  { Icon: Users, title: 'Comunidad VIP', desc: 'Red de creadores para colaboraciones.' },
  { Icon: Users, title: 'Comunidad VIP', desc: 'Red de creadores para colaboraciones.' },
  { Icon: Camera, title: 'Plantillas visuales', desc: 'Posts, stories y reels listos en segundos.' },
  { Icon: BarChart2, title: 'Métricas clave', desc: 'Aprendé a medir tu engagement y crecer.' },
  { Icon: Users, title: 'Comunidad VIP', desc: 'Red de creadores para colaboraciones.' },
  { Icon: Users, title: 'Comunidad VIP', desc: 'Red de creadores para colaboraciones.' },
];

const InfluencerToolkit: React.FC = () => (
  <section className={styles.toolkit}>
    <div className={styles.container}>
      <h2 className={styles.heading}>Toolkit para Influencers</h2>
      <div className={styles.grid}>
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className={styles.card}>
            <Icon size={48} className={styles.icon} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfluencerToolkit;
