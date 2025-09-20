import styles from './index.module.scss'
import info from "../../info.js"
import {Selection} from "../../components/selection";
import useChangePage from "../../hooks/useChangePage.js";

export const SelectionsPage = () => {
    const ref = useChangePage(1)
    return(
      <div id='selections'className={styles.root}>
          <h1  ref={ref}  className={styles.title}>My Tech</h1>
          <div className={styles.container}>
              {
                  Object.values(info.skills).map((skill, index) => (
                      <div key={index}>
                          <Selection
                              name={skill.name}
                              img={skill.img}
                          />
                      </div>
                  ))
              }
          </div>
          <div className={styles.containerplus}>
              <h1>What I can also do is create clean and effective designs.</h1>
          </div>
              <div className={styles.skillsplus}>
                  {
                      Object.values(info.plus).map(info => (
                          <div className={styles.skill}>
                              <img src={info.img}/>
                              <h1>{info.title}</h1>
                              <p>{info.description}</p>
                          </div>
                      ))
                  }
              </div>

      </div>
  )
}