import styles from "./Loading.module.css"
export default function Load() {
    
  return(
    <div className={styles.container}>
        <div className={styles.spinner}></div>
    </div>
    
  )
}
