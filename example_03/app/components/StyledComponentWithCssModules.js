import React from 'react';
import styles from './css/StyledComponent.css';

const StyledComponentWithCssModules = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>This is a styled component with CSS modules.</p>
    </div>
  );
};

export default StyledComponentWithCssModules;
