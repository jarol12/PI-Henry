import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';

const RatingInput = ({setState,state}) => {
  
const[user,setUser]= useState({rating:""});
const[error,setErrors]= useState({});

const handleChange=(event)=>{
 setUser({[event.target.name]: event.target.value });
}
useEffect(()=>{
setErrors(validate(user));//--
},[user])

useEffect(()=>{
if(!error.rating){
 setState({...state,...user,validate:true})
}else{
    setState({...state,...user,validate:false})
}
},[error])
    
function validate (user){
    const errores = {};
    if(!user.rating.length){
        errores.rating = 'Completa el rating'
    }else if(user.rating> 5){
        errores.rating = 'El rating no puede sey mayor a 5.00'
    }else if(/^[0-9]$|^[0-9]\.$|^[0-9]\.[0-9]$/.test(user.rating)){
        errores.rating = 'El rating debe estar expresado con dos decimales'
    }else if (!/^[0-5]\.[0-9]{2}$/.test(user.rating)){
        errores.rating = 'Rating inválido'
    }
    return errores
    }


    return (
       <div className={styles.container}><br/>
        <label>Rating</label> <input style={{marginTop:"20px"}} type='text'
                id='rating-input'
                placeholder='5.00'
                autoComplete="off"
                name='rating'
                onChange={(event)=> handleChange(event)}/>{error.rating && <h5>{error.rating} </h5>}
        </div>
    

    );
};

export default RatingInput;