import styles from "./index.module.scss"
import React from "react";

export const Avalible = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className={styles.root}>
            <div className={styles.circle}>
                <div>

                </div>
            </div>
            <p>Available for Hire</p>
        </div>
    )
})