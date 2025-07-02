import React, { useState, ReactNode } from 'react';
import styles from './Accordion.module.css';

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.accordion} ${open ? styles.open : ''}`}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open ? 'true' : 'false'}
      >
        <span>{title}</span>
        <span className={styles.icon}>{open ? '–' : '+'}</span>
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Accordion;
