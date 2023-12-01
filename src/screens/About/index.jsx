import React from 'react';
import styles from './index.module.scss';
import info from "../../info.js";
import useChangePage from "../../hooks/useChangePage.js";

export const About = () => {
    const ref = useChangePage(3)

    return (
        <div id='about'  className={styles.root}>
            <h1>About me</h1>
            <div className={styles.container}>
                <p ref={ref}>
                    {info.about.text}
                </p>
            </div>
        </div>
    );
};
