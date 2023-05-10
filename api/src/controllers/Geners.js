const {Genere} = require('../db')
const { Router } = require('express');
const {
  APIKEY,API_G
} = process.env;
const axios = require('axios');

const router = Router();

router.get("/", async (req, res) => {
    try {
    await axios.get(`${API_G}?key=48ed8e5264214bbea1defe0493c53dcc`)
    .then( response => response.data.results)
    .then((data) =>{
           data.map(gnres =>{
            Genere.findOrCreate({
             where:{ name: gnres.name, img: gnres.image_background}}
            );
         })
    }  
    )
    const findAll = await Genere.findAll();
    res.status(200).send(findAll);

    } catch(error) {
       res.status(404).json(error)
    }


    })

    module.exports = router;
