import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';
            
const ReleaseInput = ({setState,state}) => {
    const[user,setUser]= useState({release:""});
    const[error,setErrors]= useState({});
    
    const handleChange=(event)=>{
     setUser({[event.target.name]: event.target.value });
    }

useEffect(()=>{
 setErrors(validate(user));//--
 },[user])
 
 useEffect(()=>{
 if(!error.release){
  setState({...state,...user,validate:true})
 }else{
     setState({...state,...user,validate:false})
 }
 },[error])




    function validate (user){
        const errores = {};
        if(!user.release.length){
            errores.release  = 'Ingresa la fecha de lanzamiento'
        }else if(!/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[-](?:0?[1-9]|1[0-2])|(?:29|30)[-](?:0?[13-9]|1[0-2])|31[-](?:0?[13578]|1[02]))[-](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[-]0?2[-](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(user.release)){
            errores.release ='La fecha de lanzamiento debe estar expresada como DD-MM-YYYY'
        }else if(user.release.length>10){
            errores.release ='Fecha de lanzamiento incorrecta'
        }
        return errores
        }
  
    return (
       <div className={styles.container}><br/>
        <label>Release date:</label><br/> <input
                type='text'
                id='released-input'
                placeholder='DD-MM-YYYY'
                autoComplete="off"
                name='release'
                onChange={(event)=> handleChange(event)}
            />
        {error.release && <h5 className="danger"> {error.release} </h5>}
        </div>
    );
};
            
export default ReleaseInput;
