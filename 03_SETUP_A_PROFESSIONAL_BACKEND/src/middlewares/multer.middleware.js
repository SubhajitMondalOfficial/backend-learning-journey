import multer from "multer" 


// function to set the storage destination and filename for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, "./public/temp")
},
    filename: function (req, file, cb) { 
        cb(null, file.originalname) 
  }
})

export const upload = multer({ 
    storage,
})
