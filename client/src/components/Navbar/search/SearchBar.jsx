import { Link } from "react-router-dom";
import styles from './SearchBar.module.css'
import { useSelector } from "react-redux";
import {React } from "react";
export default function SearchBar(id,name){
  const search = useSelector((store)=>store.search)
  return( 
  <div className={search.length>0?styles.show:styles.none}>
    <nav className={styles.list}>
      <ul>
      {search.map((game)=>{
          return <Link to={`/videogames/${game.id}`} key={game.id}><li><img src={game.image} alt={game.name} />{game.name}</li></Link>
        })}
      </ul>
        </nav>
  </div>
    
)}

