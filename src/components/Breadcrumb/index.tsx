import React from 'react';
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  path: string[];
  onNavigate: (index: number) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, onNavigate }) => {
  return (
    <div className={styles.breadcrumbsContainer}>
      <h3>Breadcrumbs:</h3>
      {path && path.map((crumb, index) => (
        <span key={index}>
          {index !== 0 && ' > '}
          <span className={styles.crumb} style={{ cursor: 'pointer' }} onClick={() => onNavigate(index)}>
            {crumb}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
