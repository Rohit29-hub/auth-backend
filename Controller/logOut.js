const express = require('express')
const router = express.Router();
const Users = require('../Models/SignupSchema')

router.post('/', async (req,res)=>{
    const {email,password} = req.body;
    console.log(email,' Password : ', password)
    try{
        const response = await Users.findOneAndDelete({email : email, password : password});
        if(response === null){
            return res.status(300).json({status : false , message : 'Email or password is wrong '})
        }
        return res.status(200).json({status : true , message : "Success"})
    }catch(err){
        return res.status(500).json({error : 'Data is not recive !'})
    }
})


module.exports = router;