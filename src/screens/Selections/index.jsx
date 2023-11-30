import styles from './index.module.scss'
import info from "../../info.js"
import {Selection} from "../../components/selection";

export const SelectionsPage = () => {
  return(
      <div className={styles.root}>
          <h1 className={styles.title}>My Tech</h1>
          <div className={styles.container}>
          {
              Object.values(info.skills).map(skill => (
                  <Selection
                      name={skill.name}
                      img={skill.img}
                  />
              ))
          }
          <div className={styles.containerplus}>
          <h1>What i can else
              is to make a good design, as far as I'm concerned...</h1>
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
      </div>
  )
}