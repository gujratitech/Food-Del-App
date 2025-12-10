import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

//databse connection
connectDB();


app.get('/', (req, res) => {
    res.send('Food Delivery App Backend is running');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
