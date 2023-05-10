import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { games, fetchGames } from "../../../store/actions/actions.js";
import VideoGames from "./games/videogames.jsx";
import  styles  from "./games.module.css";
import { Link } from "react-router-dom";
import { TbPlaylistAdd ,BiSquare }from "react-icons/all.js";
//import Filt from "../OrderF/orderF.jsx";
//import Loading from "../Loading/loading.jsx";
import Buttons from "./games/pagination.jsx"
import Load from "../../Load/load.jsx";

export default function Games() {
  let getGames = useSelector((state) => state.filterGames);
  let page = useSelector((state) => state.page);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
    dispatch(games());
  }, [dispatch]);



  return (
    <div className={styles.cards}> 
      <div  className={getGames.length>0?styles.mean:styles.of}>
        <div className={styles.nav}>
           <Link to="/addGame" className={styles.add} >  Add a videogame  <TbPlaylistAdd /></Link>
        </div>
        <h5 style={{fontWeight:"500",color:"#fff" }}>páginas:</h5><Buttons />
      </div>
      <div className={styles.container}>
      {getGames.length !== 0 ? (
        getGames.slice(15* (page - 1), 15 * page).map((item) => {
          return (
            <div className={styles.card} key={item.id}>
              <VideoGames
                id={item.id}
                name={item.name}
                rating={item.rating}
                image={item.image}
                genres={item.genres}
                platforms={item.platforms}
                imagenes= {item.img}
              />
            </div>
          );
        })
      ) : (
       <Load/>
       
      )}
      </div>
     
        <div  className={getGames.length>0?styles.pag:styles.of}>
        <div className={styles.nav2}>
        </div>
        <Buttons />
        </div>
    </div>
  );
}
