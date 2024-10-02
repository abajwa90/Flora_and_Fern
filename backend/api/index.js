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
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

//Preflight requests for all routes
app.options('*', cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

// Debugging
app.use((req, res, next) => {
    console.log('Origin:', req.headers.origin);  // Log the request origin for troubleshooting
    next();
});

app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port));