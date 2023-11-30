import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

export const Header = () => {
    const currentPage = useSelector((state) => state.anim.page);
    console.log(currentPage)
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <nav>
                    <li style={{ opacity: currentPage === 0 ? 1 : 0.2 }}>
                        Main
                    </li>
                    <li style={{ opacity: currentPage === 1 ? 1 : 0.2 }}>
                        Tech
                    </li>
                    <li style={{ opacity: currentPage === 2 ? 1 : 0.2 }}>
                        Projects
                    </li>
                    <li style={{ opacity: currentPage === 3 ? 1 : 0.2 }}>
                        About me
                    </li>
                </nav>
            </div>
        </div>
    );
};
