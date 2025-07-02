// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.copy}>
        © {new Date().getFullYear()}{' '}
        <a
          href="https://flowgenio.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.brandLink}
        >
          FLOWgenio
        </a>{' '}
        · Hecho para ti  
      </p>
      <nav className={styles.links}>
        <Link href="/nosotros" className={styles.link}>
          Nosotros
        </Link>
        <Link href="/terminos" className={styles.link}>
          Términos
        </Link>
        <Link href="/privacidad" className={styles.link}>
          Privacidad
        </Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
