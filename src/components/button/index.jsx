import styles from "./index.module.scss"

export const Button = ({text = 'Click', style, img, link}) => {
    const onClick = (e) => {
        if(link){
            return 0
        }
        e.preventDefault();
    }
    return(
        <a target='_blank' onClick={(e) => onClick(e)} href={link}>
       <button style={style} className={styles.root}>
           {img ? <img style={
               {
                   width: '25px'
               }
           } src={img}/> : null}
           <p>{text}</p>
       </button>
        </a>
    )
}