// Use multer to handle file uploads in your Express application. This middleware configuration sets up a storage engine that saves uploaded files to the "./public/temp" directory with their original filenames. The `upload` variable can be used in your routes to handle file uploads.
import multer from "multer" 

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