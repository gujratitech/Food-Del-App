import express from "express";
import { addFood } from "../controllers/foodController.js";
const router = express.Router();
import multer from "multer";

const foodRouter = express.Router();

//Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
     return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const uploads = multer({storage: storage});

foodRouter.post("/add",upload.single("image") ,addFood);




export default foodRouter;
