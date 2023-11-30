import styles from './index.module.scss'
import {Button} from "../../components/button";
import info from "../../info.js"
import {Project} from "../../components/project";

export const ProjectsPage = () => {
  return(
      <div className={styles.root}>
          <div className={styles.title}>
         <h1>My projects</h1>
          </div>
          <div className={styles.container}>
              <div className={styles.projects}>
          {
              Object.values(info.myprojects).map(project => (
                  <Project
                      {...project}
                  />
              ))
          }
              </div>
          </div>
      </div>
  )
}