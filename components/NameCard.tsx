import React from 'react';
import styles from '@/styles/Home.module.css';

interface NameCardProps {
  name: string;
  description: string;
}

const NameCard: React.FC<NameCardProps> = ({ name, description }) => {
  return (
    <div className={`${styles.nameCard} card`}>
      <h3 className={styles.nameTitle}>{name}</h3>
      <p className={styles.nameDescription}>{description}</p>
    </div>
  );
};

export default NameCard;