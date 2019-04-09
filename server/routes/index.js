const router = require ('express').Router();

router.get('/', (req, res)=> {
    res.send(process.env.NODE_ENV);
});


router.use('/users', require('./users'));
router.use('/travels', require('./travels'));

module.exports = router;