import express from 'express';
import mongoose from 'mongoose'
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = process.env.PORT || 2023

// Connect to database
const connectDB = () => {
   mongoose.connect(process.env.MONGODB_URL).then(() => {
   console.log("Connected to Database")
})}

// Run Port 5000
app.listen(port, () => {
   connectDB()
   console.log('server listening on port', port)
})

// Middleware
app.use(express.json())
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

// mongoose.connect(
//    'mongodb+srv://admin:quan2101999@cluster0.mqejffb.mongodb.net/Blog?retryWrites=true&w=majority'
//    ).then(() => app.listen(5000)).then(() => console.log("Connected to Database")
//    ).catch((err) => console.log(err));
