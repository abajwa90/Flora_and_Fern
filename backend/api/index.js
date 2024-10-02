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
const corsOptions = {
    origin: 'https://flora-and-fern-client.vercel.app', // Replace with your frontend's actual domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // If you need to send cookies or authentication headers
  };
app.use(cors(corsOptions));

// api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port));