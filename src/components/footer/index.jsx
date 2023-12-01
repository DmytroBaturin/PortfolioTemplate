import React, { forwardRef } from 'react';
import styles from './index.module.scss';
import info from "../../info.js";

export const Footer = () => (
   <div className={styles.root}>
      <p>{info.mainPageInfo.footerEmail}</p>
   </div>
);
