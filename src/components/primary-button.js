import React from 'react';
import styles from './primaryButton.module.css';

export default props => (
    <button className={styles.btnPrimary} onClick={props.onClick}>{props.children}</button>    
)