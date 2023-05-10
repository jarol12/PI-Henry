import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./gameDetail.module.css"
import { useParams} from "react-router-dom";



//import Loading from "../Loading/loading.jsx";


export default function DetailGame() {
  const [change,setChange] =useState(true)
  const [games, setGames] = useState(null);

  const handleChange = ()=>{
    change? setChange(false ):setChange(true)
  }

  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/videogames/${id}`).then((res) => setGames(res.data));
  }, [id]);

  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();

    return str.replace( /(<([^>]+)>)/ig, '');
}
   
  return (
    <div className={styles.conteiner} style={games?{background:`url(${games.imagen})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}:null}>

    <div className={styles.card}>
    <div className={styles.content}>
    {games ? (
      <div className={styles.detail}>
        <div className={styles.first}>
          <div className={styles.galery}> <img src={change?games.image2:games.imagen} alt="Imagen" /><div className={styles.img2}><img src={change?games.imagen:games.image2} alt={games.id} onClick={()=>handleChange()}/></div><div><h4> Id:</h4>
          <p>{games?games.id:null}</p>
          <h4>Release date:</h4>
            <p>{games
              ? games.release_date
              : null}</p>
          
          <h4>Rating:</h4>
          <p>{games
              ? games.rating
              : null}</p></div></div>
  
        </div>
        <div className={styles.second}>
          <h1>{games.name}</h1>
          <div className={styles.cont}>
            <div> <h2> Platforms:</h2>
            <ul>
            {games.platforms.map(platform=>{
              return <p key={platform}>{platform}</p>
            })}</ul></div>
          <div>
          <h2>Genres</h2>              
            {games.generes.map(genre=>{
              return <p key={genre} >{genre}</p>
            })}
          </div>
           
          </div>
            <h2> Description:</h2>
            <p>{games? removeTags(games.description):null}</p>
          </div>
          
        </div>
      
    ) : (
     null
    )}
      
    </div>
   
    </div>
  
  </div>
  );
}
