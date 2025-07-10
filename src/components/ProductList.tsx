import React from 'react';
import styles from './ProductList.module.css';
import { BookOpen, FileText, Clipboard } from 'lucide-react';
import { event } from '../lib/gtag';

const products = [
  {
    id: 'gen-posts-ai',
    title: 'Generador de Posts AI',
    desc: 'Crea contenido viral en segundos con plantillas predefinidas.',
    Icon: BookOpen,
  },
  {
    id: 'auto-emails',
    title: 'Automatizador de Emails',
    desc: 'Secuencias y newsletters listos para enviar.',
    Icon: FileText,
  },
  {
    id: 'kit-estrategia',
    title: 'Kit Social Strategy',
    desc: 'Guías y calendarios de crecimiento paso a paso.',
    Icon: Clipboard,
  },
];

const ProductList: React.FC = () => {
  const handleChat = (id: string, title: string) => {
    // <-- Aquí corregimos la llamada:
    event('start_chat', { category: 'landing', label: title, value: 1 });
    if ((window as any).chatbase?.setInitialMessages) {
      (window as any).chatbase.setInitialMessages([
        { role: 'user', content: `Hola, quiero saber más de "${title}"` },
      ]);
    }
    document.getElementById('chatbase-bubble-button')?.click();
  };

  return (
    <section className={styles.productList}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Recursos Destacados para Creadores y Emprendedores
        </h2>
        <div className={styles.grid}>
          {products.map(({ id, title, desc, Icon }) => (
            <div key={id} className={styles.card}>
              <Icon size={48} className={styles.icon} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <button
                onClick={() => handleChat(id, title)}
                className={styles.button}
              >
                Chatea sobre esto
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
