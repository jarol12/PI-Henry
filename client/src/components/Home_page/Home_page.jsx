import styles from './HomePage.module.css'
import  Games from "./videogames/games.jsx" 
import { getGenres, getPlatforms,sort,sortRating,filterGenres,api,database, filterplatform} from "../../store/actions/actions";
import{BsPlaystation,MdOutlineGeneratingTokens,AiOutlineCloudServer,FcDataBackup,SiMacos,FaLinux,TbWorldWww,SiWiiu,BiChevronDown,BsWindows,SiXbox,BsNintendoSwitch,AiFillApple,AiFillAndroid,BiSortAZ} from 'react-icons/all' 
import { useEffect,React,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function HomePage() {
const [change,setChange] = useState(true)
const Dispatch =  useDispatch()
const genres = useSelector((store) => store.genres);
const games = useSelector((store) => store.filterGames);
 const handleClick =(e)=>{
  switch (e) {
    case "falling":
      return Dispatch(sort(e)) ;
    case "upward":
      return Dispatch(sort(e)) ;
    case "rating":
  }
 }

 const handleClick5 =() =>{
   change?setChange(false):setChange(true)
   console.log(change)
 }

 const handleClick6 =(e) =>{
  switch (e) {
    case "dataBase":
      return Dispatch(database()) ;
    case "api":
      return Dispatch(api()) ;
    case "rating":
  }
 
}




 const handleClick2 =(e)=>{
 switch (e) {
  case "falling":
    return Dispatch(sortRating(e)) ;
  case "upward":
    return Dispatch(sortRating(e)) ;
}
 }
 const handleClick3 =(e)=>{  
  return Dispatch(filterplatform(e)) ;
 }
 const handleClick4 =(e)=>{  
  return Dispatch(filterGenres(e)) ;
 }
   useEffect(()=>{
    Dispatch(getGenres())
    Dispatch(getPlatforms())
  }, [Dispatch])

 
  return (
    <div className={games.length>0?styles.container:styles.load}>
      <div className={games.length>0?styles.one:styles.none}>
        <div className={styles.menu}> 
        <section className={styles.filter}>
          <nav  >
          <h1>Platforms</h1>
          <ul>
            <li onClick={()=>handleClick3("PC")}><BsWindows className={styles.logo} style={{padding:" 6px"}}/>PC</li>
            <li onClick={()=>handleClick3("Xbox One")}><SiXbox className={styles.logo}  style={{padding:" 6px"}}/>Xbox One</li>
            <li onClick={()=>handleClick3("PlayStation")}><BsPlaystation className={styles.logo}  style={{padding:" 6px"}}/>PlayStation</li>
            <li onClick={()=>handleClick3("Nintendo Switch")}><BsNintendoSwitch className={styles.logo}  style={{padding:" 6px"}}/>Nintendo Switch</li>
            <li onClick={()=>handleClick3("iOS")}><AiFillApple className={styles.logo}  style={{padding:" 6px"}}/>iOS</li>
            <li onClick={()=>handleClick3("Android")}><AiFillAndroid className={styles.logo}  style={{padding:" 6px"}}/>Android</li>
            <li onClick={()=>handleClick3("macOS")}><SiMacos className={styles.logo} style={{padding:" 6px"}}/>macOS</li>
            <li onClick={()=>handleClick3("Linux")}><FaLinux className={styles.logo}  style={{padding:" 6px"}}/>Linux</li>
            <li onClick={()=>handleClick3("Wii U")}><SiWiiu className={styles.logo}  style={{padding:" 6px"}}/>Wii U</li>
            <li onClick={()=>handleClick3("Web")}><TbWorldWww className={styles.logo}  style={{padding:" 6px"}}/>Web</li>
           </ul> 
          </nav>
          <nav className={styles.genre} >
          <h1>Genres</h1>
          <ul className={change?styles.listG:styles.displayAll}>
            {genres.map((genre=>{
              return <li key={genre.id} onClick={()=>handleClick4(genre.name)}><img src={genre.img} alt={genre.name} />{genre.name}</li>
            }))}
           </ul>  
          
           <BiChevronDown onClick={()=>handleClick5()} className={styles.logo} style={{fontSize:"30px",marginLeft:"20px",width:"25px"}} />
           
          
          </nav>
          <nav>
          <h1>Origin</h1>
          <ul className={styles.button}>
            <li onClick={()=>handleClick6("api")}>Api <AiOutlineCloudServer/></li>
            <li onClick={()=>handleClick6("dataBase")}>Data Base<FcDataBackup/></li>
           </ul>    
          </nav>
          </section>
          <section>
          </section>
          <section>
          <nav className={styles.sort}>
          <h1>Sort<BiSortAZ/></h1>
          <ul className={styles.button}>
            <li onClick={()=>handleClick("upward")} >Upward</li>
            <li onClick={()=>handleClick("falling")}>Falling</li>
           </ul>  
          <ul className={styles.button} >
          <h1><MdOutlineGeneratingTokens/>Rating</h1>
            <li onClick={()=>handleClick2("upward")}>Upward</li>
            <li onClick={()=>handleClick2("falling")}>Falling</li>
          </ul>
          </nav>
          </section>

        </div>
          
      </div>
      <div className={styles.two}>
        <Games/>
      </div >
    </div>
            
         
        )
    }

