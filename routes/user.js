const express=require('express');
const{handleGetAllusers,handlegetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser} =require("../controllers/user")



const router =express.Router();




    //Rest api
    router.route("/").get(handleGetAllusers).post(handleCreateNewUser);
        
        
    router.route("/:id")
    .get(handlegetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)
    
    
    
  


    module.exports=router;
    
    
    
    
    
    
    