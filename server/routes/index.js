const router = require('express').Router();
const multer = require('../config/multer');

router.get('/', (req, res) => {  //le marco el '/', para hacerle una peticion
    res.send(process.env.NODE_ENV); // me envia el entorno en el que estoy trabajando
});
router.post('/multer/upload', multer.single('file'),(req,res)=>{
        res.send(req.file)
});

router.use('/users', require('./users'));

router.use('/travels', require('./travels')); // router usa la ruta viajes requiriendo del archivo viajes

module.exports = router;