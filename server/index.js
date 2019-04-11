require('./config');
const express = require('express');

const PORT = process.env.PORT ||3000;
const server = express();


server.use(express.json());

server.use(require('./routes'));

server.use('/public', express.static(`${__dirname}/public`))


server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
});