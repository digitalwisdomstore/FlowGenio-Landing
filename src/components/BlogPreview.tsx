import React from 'react';
import styles from './BlogPreview.module.css';

const posts = [
  { slug: 'tips-reels-2025', title: '5 Tips para Reels Virales en 2025' },
  { slug: 'seo-latam', title: 'SEO en LATAM: Estrategias que Funcionan' },
  { slug: 'automatizar-marketing', title: 'Cómo Automatizar tu Marketing con AI' },
];

const BlogPreview: React.FC = () => (
  <section className={styles.blog}>
    <div className={styles.container}>
      <h2 className={styles.heading}>Últimos Posts Generados por AI</h2>
      <div className={styles.grid}>
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className={styles.card}>
            <h3>{p.title}</h3>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
