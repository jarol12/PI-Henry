import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';


const NameInput = ({setState,state}) => {

const[user,setUser]= useState({name:""});
const[error,setErrors]= useState({});

const handleChange=(event)=>{
 setUser({[event.target.name]: event.target.value });
}

useEffect(()=>{
setErrors(validate(user));//--
},[user])

useEffect(()=>{
if(!error.name){
 setState({...state,...user,validate:true})
}else{
    setState({...state,...user,validate:false})
}
},[error])

function validate (user){
    const errores = {};
    if(user.name.length > 40){
        errores.name = "Título  demasiado largo"
    }else if(/^\s/.test(user.name)){
        errores.name = 'El título no puede comenzar con espacios en blanco'
    }else if(!user.name.length){
        errores.name = 'El campo no puede estar vacío'
    }else if(user.name.length < 4){
        errores.name = 'El título debe tener por lo menos 4 caracteres'
    }
    return errores
    }



    return (
       <div className={styles.container}>
        <label>Título:</label><input style={{marginTop:"20px"}}   name="name" type="text" onChange={(event)=> handleChange(event)} />
        {error.name && <h5> {error.name} </h5>}
        </div>
    );
};

export default NameInput;