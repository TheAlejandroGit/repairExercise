const express= require("express")
 
//Controller
const {getAllusers, createUser}=require("../controllers/users.controller")


const router= express.Router()
router.get("/", getAllusers);

router.post("/", createUser );

// router.patch
// router.delete



//export
module.exports= {usersRouter: router };

