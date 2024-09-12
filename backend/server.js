import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'


// Load environment variables
dotenv.config();

//app config
const app = express();
const port = 4000 || process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//api endpoint
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log(`Server started on : http://localhost:${port}`);
});
