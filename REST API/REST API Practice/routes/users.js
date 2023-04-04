import { createUser,getUser,deleteUser,patchUser, userDetails} from '../controllers/users.js';
import express from 'express';

const router = express.Router();

//Users Page Get method
router.get('/',userDetails)

//Users Page Post Method
router.post('/',createUser)

//Distinct User Details
router.get('/:id',getUser)


//Delete Distinct User Details
router.delete('/:id',deleteUser)


//Updates the details of a distinct user
router.patch('/:id',patchUser)

export default router;