const { Router} = require('express');
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const {Videogame,Genere,Platform} = require('../db')
const {
  API,APIKEY
} = process.env;

const axios = require('axios');


const router = Router();

router.get("/search", async (req, res) => {
  const {name} = req.query
  try {
    if(name){
     const Api= await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}&search=${name}`)
     const db = await Videogame.findAll({
        include: [
            {
                model: Genere,
                through: {
                    attributes: []
                }
            },

            {
                model: Platform,
                through: {
                    attributes: []
                }
            },

        ],

      where: {
        name: {[Op.like]:`%${name}%`}
      }
     }

    )
    Promise.all([Api,db])
    .then((response) => {
    const [data_Api,data_db] = response;
    const Api_date = data_Api.data.results.map((dates)=>{
      return {
        id: dates.id,
        name:dates.name,
        description:dates.description,
        platforms:dates.platforms ?dates.platforms.map(plat => plat.platform.name):"there is not data",
        image:dates.background_image,
        release_date:dates.released,
        rating:dates.rating
      }

    })

     const result= Api_date.concat(data_db)
     res.status(200).json(result)
  })

  }else{
    console.log(name)
    res.status(200).json([""])
  }
  } catch(error) {
     res.status(404).json(error)
  }
    
  })



  
router.get("/", async (req, res) => {
try {
  const find_data=  await Videogame.findAll({
    include: [
        {
            model: Genere,
            through: {
                attributes: []
            }
        },

        {
            model: Platform,
            through: {
                attributes: []
            }
        },

    ]}
  )
  const data_db = find_data.map(find_data =>{
    return {
      id:find_data.id,
      name: find_data.name,
      rating:find_data.rating,
      image:find_data.imagen,
      genres:find_data.generes.map(genre=> genre.name),
      platforms:find_data.platforms.map(plat =>plat.name)
    }
  })


  
  let videojuegos = []
  let videojuegos2 = []
  const Url_data =`${API}?key=48ed8e5264214bbea1defe0493c53dcc`
        for (let i = 0; i < 5; i++) {
            const respuesta = await axios.get(Url_data)
            let size = respuesta.data.next.length
            const a = respuesta.data.next.slice(0,size-1)
            const nex = a.concat(i+1)
            videojuegos.push(nex)
        }
  let i = 0;
  while(i<5){
  const a = await axios.get(videojuegos[i])
  a.data.results.map(dates => {
    videojuegos2.push({
        id: dates.id,
        name: dates.name,
        image: dates.background_image,
        rating: dates.rating,
        platforms: dates.platforms?.map(el => el.platform.name),
        genres: dates.genres?.map(el => el.name),
        img: dates.short_screenshots?.map(img => img.image)
        
    })
});
 i++
}

  const Api_db = videojuegos2.concat(data_db)
  res.status(200).json(Api_db)
 

  
} catch(error) {
   res.status(404).json(error)
}
  
})

router.get("/:idVideogame", async(req, res)=>{
  const {idVideogame}  = req.params
  try {
    if(idVideogame.length>10 && typeof(idVideogame) === "string"){
      const data_id_db =  await Videogame.findOne({ 
        include: [
            {
                model: Genere,
                through: {
                    attributes: []
                }
            },

            {
                model: Platform,
                through: {
                    attributes: []
                }
            },

        ],
        where: { id: idVideogame} })
      const data_db = {
        id:data_id_db.id,
        name: data_id_db.name,
        description: data_id_db.description,
        release_date: data_id_db.release_date,
        rating:data_id_db.rating,
        imagen:data_id_db.imagen,
        generes:data_id_db.generes.map(genre=> genre.name),
        platforms:data_id_db.platforms.map(plat =>plat.name)
      }
     res.status(200).json(data_db) 
    }else{
      await axios.get(`${API}`+ "/"+`${idVideogame}?key=48ed8e5264214bbea1defe0493c53dcc`)
     .then(data => data.data)
     .then((data)=>{
      const data_api ={
        id: data.id,
        name:data.name,
        description:data.description,
        platforms:data.platforms.map(plat => plat.platform.name),
        imagen:data.background_image,
        image2:data.background_image_additional,
        release_date:data.released,
        rating:data.rating,
        tags_img:data.tags.map(tag =>tag.image_background),
        generes:data.genres.map(genre=> genre.name),
      }
       
       res.status(200).json(data_api)
   
     }
     
      
      )
    }
  } catch (error) {
    res.status(404).send("element it not found database")
  }
})



  router.post("/", async (req, res) => {
     const {
      name,
      description,
      imagen,
      release_date,
      rating,
      genersId,
      platformsId,
     } = req.body
   const id = uuidv4()
    try {
    const create_games = {
      id,
      name,
      description,
      imagen,
      release_date,
      rating
    }
    const create_game= await Videogame.create(create_games)
    await create_game.addGenere(genersId)
    await create_game.addPlatform(platformsId)
    
 res.status(201).json("Your game loaded successfully.")
   
} catch(error){
}
  }
)


module.exports = router;
