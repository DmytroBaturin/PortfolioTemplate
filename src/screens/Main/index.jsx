import styles from './index.module.scss'
import {Avalible} from "../../components/avalible";
import {Button} from "../../components/button";
import info from "../../info.js"

export const Main = () => {
    return(
      <div className={styles.root}>
          <div className={styles.page}>
              <div className={styles.container}>
                  <div  className={styles.blur}>
                  </div>
                  <Avalible/>
                  <div className={styles.title}>
                  <h1>Hello, i’m Dmytro<br /><span>FrontEnd Developer.</span></h1>
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
                          I am a young front-end developer who improves my skills every day, both in design and development. Write to me if you need anything
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}