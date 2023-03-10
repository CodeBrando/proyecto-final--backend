const multer = require('multer');
const path = require('path');
const { URL_SERVICE } = require('./constants');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname + '/../public/imgs'))
    },
    filename: (req, file, cb)=>{
        const nameFile = new Date().getTime()+`-${file.originalname}`
        req.body.thumbnail=path.join(`${URL_SERVICE}/imgs/`+nameFile)
        cb(null, nameFile);
    }
})

module.exports = multer({storage})