import { Link } from "react-router-dom";
import styles from './game.module.css'
import { useState } from "react";
import {AiOutlinePlayCircle} from 'react-icons/all'
export default function Game({name,rating, genres, id ,platforms,imagenes,image}) {
  

	const [imagenActual, setImagenActual] = useState(0);
	const cantidad = imagenes?.length;
  
  const siguienteImagen = () => {
    if (!Array.isArray(imagenes) || cantidad === 0|| imagenes === undefined) return;
    else{ for(let i = 1; i< imagenes.length;i++){
    setTimeout(() => {
      setImagenActual(imagenActual + i);
      if(imagenes.length-1=== i){
        setImagenActual(0)
        console.log(imagenActual)   
      }
    }, i*800);
		
	}}
  
}

  return (
    <div>   
        <div className={styles.card}>   
        <div className={imagenActual!=0 ||!imagenes?styles.none:styles.play}>
        <AiOutlinePlayCircle  onClick={()=>siguienteImagen()}/>
        </div>
        
        <img src={imagenes? imagenes[imagenActual]:image} alt="img"  />
        
    <div className={styles.information}>
        <div className={styles.first}> <Link to= {`/videogames/${id}`}><h3 style={{marginLeft:"10px", color:"white"}}>{name}</h3></Link>
            <div className={styles.rating}>
             <p>{rating}</p> </div>
        </div>
          <div className={styles.genres}><h5>Genres</h5>
            <ul>{genres.map(genre=>{
            return <li key={genre.id}>{genre}</li>
            })}</ul>
          </div>
          <div className={styles.platforms}><h5>Platforms</h5>
            <ul>{platforms.map(platform=>{
            return <li key={platform.id}>{platform}</li>
            })}</ul>
          </div>
          </div>

  
        </div>
      
    </div>
  );
}
