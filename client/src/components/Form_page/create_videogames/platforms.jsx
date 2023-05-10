import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getPlatforms } from '../../../store/actions/actions';
import {IoCloseCircleOutline} from 'react-icons/all'
const PlatformsInput = ({state,setState}) => {
const Dispatch =  useDispatch()
let platforms = useSelector((state) => state.Platforms);
const[error,setErrors]= useState({});

const[platformId,setPlatformID]= useState([]);
const [platform, setPlatform] = useState([])

useEffect(()=>{
 Dispatch(getPlatforms())
 }, [Dispatch])

 //
   
 
useEffect(()=>{
  setErrors(validate( ));//--
  },[platformId])
  
  useEffect(()=>{
  if(!error.platform){
   setState({...state,platformId,validate:true})
  }else{
      setState({...state,platformId,validate:false})
  }
  },[error])
  

const handleChange = (e)=>{
  console.log(e.target.value)
 const a = platforms.find((x)=>(x.name===e.target.value))
 if(platform.length>4||platform.indexOf(a.name)!=-1){

 }else{
 setPlatform([...platform,a.name])
 setPlatformID([...platformId,a.id])
}
}




function validate ( ){
  const errores = {};
  if(platform.length > 4){
      errores.platform = "solo se permite 4 platforms"
  }else if(platform.length ===0){
    errores.platform = "Ingrese al menos una platform"

  }
  return errores
  }

const handleClick =(select)=>{
const resultado = platform.filter(clean => clean != select);
const  id = platforms.find((clean )=>clean.name === select)
const resultado_id = platformId.filter(clean => clean != id.id);
setPlatformID(resultado_id)
console.log(id)
setPlatform(resultado)

}


    return (
       <div className={styles.container}><br/>
        <label>Plataformas</label><br/>
        <select id='platforms-input'    name="referrer"  onChange={(e)=>handleChange(e)}>
              <option  value='default' disabled>Seleccionar plataformas</option>
              {platforms.map(platform=>{
                return <option key={platform.id} value={platform.name}>{platform.name}</option>
              })}
          </select>
          <div >{platform.map(select => {
            return <p key={select}>{select}<IoCloseCircleOutline className={styles.close} onClick={() =>handleClick( select)}/></p>
          })}
          </div>
        {error.platform && <h5> {error.platform} </h5>}
        </div>
    );
};

export default PlatformsInput;