const mongoose = require ('mongoose');
console.log(process.env.PORT)

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/web-viajes', {useNewUrlParser: true}).then(()=> {
    console.log('Exito en la conexión')
});


module.exports = mongoose;
