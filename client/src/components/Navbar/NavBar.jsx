import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
import SearchBar from "./search/SearchBar.jsx";
import { BiSearch} from "react-icons/bi";
import {CgGames} from 'react-icons/cg'
import { getGames,cleanGames} from "../../store/actions/actions";
import { useDispatch } from "react-redux";
import {useState } from "react";
export default function NavBar(){
  const dispatch= useDispatch ()
  const[change, setChange] = useState()

 let handleChange =(e)=>{
  dispatch(cleanGames())
  dispatch(getGames(e.target.value))
  setChange(e.target.value)
 }

  return( 
    <div className={styles.topnav}>
      <div className={styles.logo}>
      <CgGames/>
      </div>
    <div className={styles.search}>
      <form>
      <BiSearch className={styles.input_icon} />
      <div className={styles.input_wrapper}>
      <input type="search" className={styles.input} placeholder="Search" onChange={(e) => handleChange(e)}/>
      <div className={ change?styles.contain:styles.none}>
        <SearchBar />
      </div>
      </div>
      </form>
    </div>
    <div className={styles.home}>
      <Link to= "/videogames" style={{textDecoration: "none",color:"white"}}><strong>Home</strong></Link>
      </div>
      
      
  </div>
    
)}


    