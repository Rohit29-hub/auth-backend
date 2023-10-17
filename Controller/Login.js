const express = require('express')
const router = express.Router();
const Users = require('../Models/SignupSchema')

router.post('/', async (req,res) =>{
    const {email,password} = req.body;
    try{
        const checkUser = await Users.findOne({email : email, password : password});
        if(checkUser === null){
            return res.status(500).json({status : false, message :'Logins details is not found '})
        }
        return res.json(checkUser);
    }catch(err){
        return res.status(500).json('Server is Busy !')
    }
})


module.exports = router;