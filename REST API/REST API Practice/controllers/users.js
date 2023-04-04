import { v4 as uuidv4 } from 'uuid';

export let users =[]

export const userDetails = (req,res)=>{
    res.send(users)
}

export const createUser = (req,res)=>{
    let user = req.body;
    const userId = uuidv4();
    const userWithId = {userId,...user}
    users.push(userWithId)
    res.send(`User with first name ${user.firstName} added succesfully to the database!!!`)
}

export const getUser = (req,res)=>{
    const {id} = req.params
    const foundUser = users.find((user)=>user.userId==id)
    res.status(200);
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    res.status(200)
    const {id} = req.params
    const foundUser = users.find((user)=>user.userId==id)
    console.log(foundUser)
    users = users.filter((user)=>user.userId!=id)
    res.send("User details deleted succesfully!!!")
}

export const patchUser = (req,res)=>{
    const {id} = req.params
    const {firstName,lastName,age} = req.body
    const updateUser = users.find((user)=>user.userId==id)

    if(firstName)
      updateUser.firstName = firstName
     if(lastName)
      updateUser.lastName = lastName
     if(age)
       updateUser.age=age
     res.send(`User with ${id} has been updated!!`)

}