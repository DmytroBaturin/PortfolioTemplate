import styles from './index.module.scss'
import {Avalible} from "../../components/avalible";
import {Button} from "../../components/button";
import info from "../../info.js"
import useChangePage from "../../hooks/useChangePage.js";

export const Main = () => {
    const ref = useChangePage(0)
    return(
      <div id='main' className={styles.root}>
          <div ref={ref} className={styles.page}>
              <div className={styles.container}>
                  <div  className={styles.blur}>
                  </div>
                  <Avalible/>
                  <div className={styles.title}>
                  <h1>{info.mainPageInfo.h1}<br /><span>{info.mainPageInfo.h1span}</span></h1>
                      <div className={styles.buttons}>
                          {
                     Object.values(info.buttons).map((button) => (
                         <Button
                             text={button.text}
                             img={button.img}
                             link={button.link}
                         />
                     ))

                          }
                      </div>
              </div>
                  <div className={styles.subtitle}>
                      <p>
                          {info.mainPageInfo.p}
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}