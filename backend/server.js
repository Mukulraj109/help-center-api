import express from 'express';
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import cardRoute from "./routes/card.route.js";
import cors from 'cors'

const app = express();
app.use(cors())
dotenv.config({})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Basic endpoint to check if the server is running

app.get('/ping', (req, res) => {
  res.json({ message: 'Server is running' });
});
//api
app.use("/cards", cardRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});
