import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'
import router from './routes/users.js';

const app = express();
const PORT = 5000;

//Middleware
app.use(bodyParser.json());

//GET Method to Homepage
app.get('/',(req,res)=>{
    res.status(200)
    res.send("App at Homepage")
})

//Routes
 //1. users page
app.use('/users',userRoutes);




//Port listening
app.listen(PORT,()=>console.log(`Server running at http://localhost:${PORT}`))