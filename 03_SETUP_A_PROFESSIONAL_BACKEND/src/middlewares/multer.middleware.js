import multer from "multer" 

// File storage configuration for multer
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