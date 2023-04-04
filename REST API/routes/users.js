import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
    {
        firstName : "John",
        lastName : "Doe",
        age: 25
    },
    {
        firstName : "Jane",
        lastName : "Austin",
        age: 29
    }

]

router.get('/',(req,res)=>{
    res.status(200)
    res.send(users)
})

router.post('/',(req,res)=>{
    const user = req.body
    const userId = uuidv4();
    const userWithId = {userId,...user}
    users.push(userWithId)
    res.status(200)
    res.send(`User with first name ${req.body.firstName} is added to the Database!!!`)
})
export default router;
