import styles from "./index.module.scss"

export const Button = ({text = 'Click', style, img}) => {
    return(
       <button style={style} className={styles.root}>
           {img ? <img style={
               {
                   width: '25px'
               }
           } src={img}/> : null}
           <p>{text}</p>
       </button>
    )
}