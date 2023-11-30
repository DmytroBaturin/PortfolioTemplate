import styles from './index.module.scss'
import {Button} from "../button";

export const Project = ({title, description, stack, link}) => {
  return(
      <div className={styles.root}>
         <div className={styles.container}>
             <a target='_blank' href={link}>
             <div className={styles.textcontainer}>
                 <div className={styles.link}>
                     <div className={styles.title}>
                         <h1>{title}</h1>
                     </div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                         <path d="M19 1C19 0.447716 18.5523 8.51881e-07 18 8.51881e-07H9C8.44771 8.51881e-07 8 0.447716 8 1C8 1.55229 8.44771 2 9 2H17V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V1ZM1.70711 18.7071L18.7071 1.70711L17.2929 0.292894L0.292893 17.2929L1.70711 18.7071Z" fill="white"/>
                     </svg>
                 </div>
             <p>{description}</p>
             </div>
             <div className={styles.stack}>
             {
                 stack?.map((item) => (
                     <Button
                         text={item}
                     />
                 ))
             }
             </div>
             </a>
         </div>
      </div>

  )
}