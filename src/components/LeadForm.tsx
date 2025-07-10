import React, { useState } from 'react';
import styles from './LeadForm.module.css';
import { event } from '../lib/gtag';

const LeadForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // <-- Aquí corregimos la llamada:
    event('subscribe', { category: 'leadgen', label: email, value: 1 });
    alert('🔔 ¡Gracias! Te enviaremos tu demo gratis al correo.');
    setEmail('');
  };

  return (
    <section className={styles.leadForm}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Pruébalo GRATIS ahora</h2>
        <p className={styles.subtitle}>
          Genera tu primer post o newsletter con AI — sin tarjeta de crédito.
        </p>
        <div className={styles.formCard}>
          <form onSubmit={submit} className={styles.form}>
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.button}>
              Obtener Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
