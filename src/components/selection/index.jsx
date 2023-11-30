import styles from './index.module.scss'

export const Selection = ({img, name}) => {
  return(
      <div className={styles.root}>
          <div className={styles.container}>
            <img src={img}/>
            <p>{name}</p>
          </div>
      </div>
  )
}