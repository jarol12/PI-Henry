import styles from "./styles/Load.module.css"
import {CgGames} from 'react-icons/cg'
import  { useState } from "react";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const[state,setState] = useState(false)
 setTimeout(() => {
  setState(true)
 }, 3000);


  return(
    <div className={styles.body}>
      <div className={styles.center}>
      <div className={styles.ring}>
      </div>
      <span><CgGames/>
      <h1>Loadding...</h1></span>
      </div>
      <div className={state?styles.botton:styles.none} >
         <Link to={"/videogames"}><h1 style={{color:"#fff"}}>Press enter</h1></Link>
      </div>
    
    </div>
    
  )
}
