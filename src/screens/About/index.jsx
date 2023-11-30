import styles from './index.module.scss'
import {Avalible} from "../../components/avalible";
import {Button} from "../../components/button";
import info from "../../info.js"

export const About = () => {
  return(
      <div className={styles.root}>
        <h1>About me</h1>
          <div className={styles.container}>
          <p>{info.about.text}</p>
          </div>
      </div>
  )
}