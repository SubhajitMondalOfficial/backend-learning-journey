import multer from "multer" 

// multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. In this code snippet, we are configuring multer to store uploaded files in a specific directory and to use the original filename for the stored file.

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
