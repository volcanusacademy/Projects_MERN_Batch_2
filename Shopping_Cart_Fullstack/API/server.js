import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'express'
import productRouter from './Routes/product.js'
import userRouter from './Routes/user.js';
import cors from 'cors'
import { config } from 'dotenv';


const app = express();
config({path:'.env'})

app.use(bodyParser.json())

app.use(cors({
    origin: true,
    methods:["GET","POST", "PUT", "DELETE"],
    credentials:true
}))

//user router
app.use('/api/user', userRouter);



// product Router
app.use('/api/product', productRouter) 


//get => browser
//post, put, delete => frontend or frontend client

mongoose.connect( process.env.Mongo_URI,{
    dbName:
        "Volcanus_MERN_E_Commerce"

}).then(() => console.log("MongoDB Connected Successfully...!")).catch((err) => console.log(err))

const port = 1000;
app.listen(1000, () => { console.log(`Server is Running on port ${port}`) })