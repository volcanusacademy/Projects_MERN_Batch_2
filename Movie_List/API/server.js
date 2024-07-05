import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'express'
import movieRouter from './Routes/movie.js'
import cors from 'cors'


const app = express();

app.use(bodyParser.json())

app.use(cors({
    origin: true,
    methods:["GET","POST", "PUT", "DELETE"],
    credentials:true
}))

app.use('/api/movie', movieRouter)

mongoose.connect("mongodb+srv://neetubinoriya:uJ7F3ktvWTDY6Nqo@cluster0.cv2bxwy.mongodb.net/", {
    dbName:
        "Volcanus_Movie_List"

}).then(() => console.log("MongoDB Connected Successfully...!")).catch((err) => console.log(err))

const port = 1000;
app.listen(1000, () => { console.log(`Server is Running on port ${port}`) })