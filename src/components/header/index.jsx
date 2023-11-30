import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

export const Header = () => {
    const currentPage = useSelector((state) => state.anim.page);

    const goToPage = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - 100;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <nav>
                    <li onClick={() => goToPage('main')} style={{ opacity: currentPage === 0 ? 1 : 0.2 }}>
                        Main
                    </li>
                    <li onClick={() => goToPage('selections')} style={{ opacity: currentPage === 1 ? 1 : 0.2 }}>
                        Tech
                    </li>
                    <li onClick={() => goToPage('projects')} style={{ opacity: currentPage === 2 ? 1 : 0.2 }}>
                        Projects
                    </li>
                    <li onClick={() => goToPage('about')} style={{ opacity: currentPage === 3 ? 1 : 0.2 }}>
                        About me
                    </li>
                </nav>
            </div>
        </div>
    );
};
