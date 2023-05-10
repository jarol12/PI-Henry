const { Router } = require('express');
const { Platform } = require('../db');
const {platforms} = require('./utils.js')

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        for(let i of platforms){
        await Platform.findOrCreate({where:{name:i}})
    }
        const platformsDB = await Platform.findAll();       
      res.json(platformsDB);
    } catch (error) {
       res.status(404).json({error:"data not found"})
    }
});

module.exports = router;