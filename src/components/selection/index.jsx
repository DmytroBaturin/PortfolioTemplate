import React, { forwardRef } from 'react';
import styles from './index.module.scss';

export const Selection = forwardRef(({ img, name}, ref) => (
    <a target='_blank'>
    <div ref={ref} className={styles.root}>
        <div className={styles.container}>
            <img src={img} alt={name}/>
            <p>{name}</p>
        </div>
    </div>
    </a>
));
