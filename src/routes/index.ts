import express from 'express';
import multer from "multer";
import path from 'path';

import { getAllBooks, addBook, getBookById, addRatingById, handleFileUpload } from '../controllers';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dirArray = __dirname.split(path.sep);
        dirArray.pop();
        const newDir = dirArray.join(path.sep);
        console.log(`Hi`, path.join(newDir, '/public/images'))
        cb(null, path.join(newDir, '/public/images'))
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname);
    }
  })
  
const upload = multer({ storage: storage })

router.get("/get_books", getAllBooks);

router.get("/get_book/:id", getBookById);

router.post("/add_book", addBook);

router.post("/add_rating/:id/:rate", addRatingById);

router.post("/upload_file", upload.single('file'),handleFileUpload);



export default router;