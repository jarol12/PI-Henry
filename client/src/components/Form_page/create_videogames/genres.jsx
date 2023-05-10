import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getGenres } from '../../../store/actions/actions';
import {IoCloseCircleOutline} from 'react-icons/all'


const GenresInput = ({state,setState}) => {
  
const Dispatch =  useDispatch()
let genres = useSelector((state) => state.genres);
const[error,setErrors]= useState({});
const [genre, setGenres] = useState([])
const[genreId,setgenreID]= useState([]);
useEffect(()=>{
  Dispatch(getGenres())
}, [Dispatch])

useEffect(()=>{
  setErrors(validate( ));//--
  },[genreId])
  
  useEffect(()=>{
  if(!error.genre){
   setState({...state,genreId,validate:true})
  }else{
      setState({...state,genreId,validate:false})
  }
  },[error])
  

const handleChange = (e)=>{
 const a =genres.find((x)=>(x.name === e.target.value))
 if(genre.length>4||genre.indexOf(a.name)!=-1){
 
 }else{
setGenres([...genre,a.name])
setgenreID([...genreId,a.id])
 }
}


function validate (){
  const errores = {};
  if(genre.length > 4 ){
      errores.genre= "solo se permite 4 genres"
  }else if(genre.length===0){
    errores.genre = "Ingrese al menos un genre"
  }
  return errores
  }

    
const handleClick =(select)=>{
const resultado =genre.filter(clean => clean != select);
const  id = genres.find((clean )=>clean.name === select)  
const resultado_id = genreId.filter(clean => clean != id.id);  
setgenreID(resultado_id)
setGenres(resultado)
}


    return (
       <div className={styles.container}><br/>
        <label>Genres:</label><br/>
        <select id='platforms-input'    name="referrer"  onChange={(e)=>handleChange(e)}>
              <option  value='default' disabled>Seleccionar Genres</option>
              {genres.map(genre=>{
                return <option key={genre.id} value={genre.name}>{genre.name}</option>
              })}
          </select>
          <div >{genre.map(select => {
            return <p key={genre}>{select}<IoCloseCircleOutline className={styles.close} onClick={() =>handleClick(select)}/></p>
          })}</div>
        {error.genre && <h5> {error.genre} </h5>}
  
        </div>
    );
};

export default GenresInput;