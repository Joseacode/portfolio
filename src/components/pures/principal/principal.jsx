import { Parallax, Background } from 'react-parallax'
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


/*<Parallax 
        bgImage={img}
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '50%',
                    top: '50%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
            />
        )}
    >
        <p>... Content</p>
    </Parallax>
*/
/* <Parallax className={styles.backg} bgImage = {img} strength={400}>
        <div style = {{height:"60vh"}}>
          <p className={styles.line1}>José Antonio Miró Erdmann</p>
          <p className={styles.line2}>Full Stack Developer</p>
        </div>
      </Parallax>  */


