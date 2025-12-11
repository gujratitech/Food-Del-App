import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import foodRouter from './routes/foodRoute.js';
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

//databse connection
connectDB();

//api end point
app.use("/api/food", foodRouter);


app.get('/', (req, res) => {
    res.send('Food Delivery App Backend is running');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
