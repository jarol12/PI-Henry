import styles from './Form_page.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { postGame} from '../../store/actions/actions';
import { useDispatch } from 'react-redux';
import  PlatformsInput from './create_videogames/platforms'
import  NameInput from './create_videogames/name'
import GenresInput from './create_videogames/genres'
import RatingInput from './create_videogames/rating';
import DescriptionInput from './create_videogames/description';
import ReleaseInput from './create_videogames/released_date'
import ImageInput from './create_videogames/url_image';




export default function DetailGame() {

    const [validate, setValidate] = useState(null);
    const [game, setGame] = useState(null);
    const dispatch = useDispatch()

    const a = "https://pixelz.cc/wp-content/uploads/2018/08/mario-kart-8-uhd-4k-wallpaper.jpg"
    
    let momentoActual = new Date() 
    var segundo = momentoActual.getSeconds()
    const  id  = segundo;
    useEffect(() => {
      axios(`http://localhost:3001/videogames/${id}`).then((res) => setGame(res.data));
    },[a]);
    
 function creategames(event){
      event.preventDefault(); 
      if(validate && validate.name && validate.description && validate.rating && validate.genreId && validate.platformId && validate.release && validate.url && validate.validate){
        const dataPost = {
          name:validate.name,
          description:validate.description,
          imagen:validate.url,
          release_date:validate.release,
          rating:validate.rating,
          genersId:validate.genreId,
          platformsId:validate.platformId
        }
        dispatch(postGame(validate))
       }else{
        alert("Faltan datos a completar")
       }
  
    
  
   }
  
  
  return (
    <div className={styles.background} style={game?{background:`url(${game.imagen})`,backgroundRepeat:" no-repeat",backgroundSize:"100%"}:{background:`url(${a})`,backgroundRepeat:" no-repeat",backgroundSize:"100%"}}  >
      <div className={styles.container}>
      <form className={styles.form}  onSubmit={(e)=> creategames(e)}>
      <fieldset>
        <NameInput state = {validate}
        setState={setValidate}/>
        <ImageInput state = {validate} setState={setValidate}/>
        <DescriptionInput  setState={setValidate} state={validate}/>
        <RatingInput state = {validate} setState={setValidate}/>
        <PlatformsInput state = {validate} setState={setValidate}/>
        <GenresInput state = {validate}  setState={setValidate}/>
        <ReleaseInput state = {validate} setState={setValidate}/>
        </fieldset>
          <input type="submit" value="create videogame" />
        </form>
      </div> 
  </div>
  );
}
