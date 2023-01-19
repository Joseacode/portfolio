
import styles from "./principal.module.css"
import img from "../../../images/begin.jpg"

export default function Principal() {
 
  return (
    <div>
        <img src={img} alt="bar" className={styles.head}/>
        <label className={styles.line1}>José Antonio Miró Erdmann</label>
        <label className={styles.line2}>Full Stack Developer</label>
    </div>
  )
}