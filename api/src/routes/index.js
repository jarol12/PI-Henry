const { Router} = require('express');
const Platforms_Router = require('../controllers/Platforms.js')
const Genres_Router = require('../controllers/Geners.js')
const VideoG_Router = require('../controllers/Video_games.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/platforms',Platforms_Router)
router.use('/genres',Genres_Router)
router.use('/videogames',VideoG_Router)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
