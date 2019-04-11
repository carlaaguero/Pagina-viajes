const multer = require('multer');
const express = require('express')
const storage = multer.diskStorage({
        destination: (req, file, callback)=>{
            callback(null, "server/public/image/")
        },
        filename: (req,file,callback)=>{
            callback(null,file.originalname);
        }
});


module.exports = multer({storage});