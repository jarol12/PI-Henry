import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';

const DescriptionInput = ({setState, state}) => {
    
const[user,setUser]= useState({description:""});
const[error,setErrors]= useState({});

const handleChange=(event)=>{
 setUser({[event.target.name]: event.target.value });
}

useEffect(()=>{
setErrors(validate(user));//--
},[user])

useEffect(()=>{
if(!error.description){
 setState({...state,...user,validate:true})
}else{
    setState({...state,...user,validate:false})
}
},[error])


function validate (user){
    const errores = {};
    if(user.description.length > 1500){
        errores.description= "Descripción demasiada larga"
    }else if(!user.description.length){
        errores.description = 'El campo no puede estar vacío'
    }else if(user.description.length < 200){
        errores.description = 'La descripción debe tener por lo menos 200 caracteres'
    }
    return errores
    }
    

    return (
       <div className={styles.container}>
        <label for="email">Describe your videogame: <br/> <textarea style={{marginTop:"20px"}}  id="bio" name="description" rows="3" cols="30" placeholder="I like coding on the beach..." onChange={(event)=> handleChange(event)} ></textarea></label>
        {error.description && <h5> {error.description} </h5>}
        
        </div>
    );
};

export default DescriptionInput;