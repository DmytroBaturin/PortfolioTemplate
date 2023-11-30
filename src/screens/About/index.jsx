import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import info from "../../info.js";
import {useDispatch} from "react-redux";
import {changeActiveLi} from "../../store/haederSlice.js";
import useChangePage from "../../hooks/useChangePage.js";

export const About = () => {
    const [visible, setVisible] = useState(false);
    const containerRef = useRef(null);
    const ref = useChangePage(3)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
            }
        }, { threshold: 0.1 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const renderText = () => {
        return info.about.text.split('').map((char, index) => (
            <span key={index} className={visible ? styles.fall : ''} style={{ transitionDelay: `${index * 20}ms` }}>
                {char}
            </span>
        ));
    };

    return (
        <div id='about'  className={styles.root}>
            <h1>About me</h1>
            <div className={styles.container} ref={containerRef}>
                <p ref={ref}>
                    {renderText()}
                </p>
            </div>
        </div>
    );
};
