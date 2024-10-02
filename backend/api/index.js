import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from '../config/mongodb.js'
import userRouter from '../routes/userRoute.js'
import productRouter from '../routes/productRoute.js'
import cartRouter from '../routes/cartRoute.js'
import orderRouter from '../routes/orderRoute.js'


// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();


// middlewares
app.use(express.json())

//CORS config
const allowedOrigins = ['https://flora-and-fern.vercel.app']; // Replace with your frontend's actual domain
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

// api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port));