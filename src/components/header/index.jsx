import styles from "./index.module.scss"

export const Header = () => {
    return(
        <div className={styles.root}>
            <div className={styles.header}>
                <nav>
                    <li>
                        Main
                    </li>
                    <li>
                        Tech
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        About me
                    </li>
                </nav>
            </div>
        </div>
    )
}