const express = require('express')
const router = express.Router();
const userSchema = require('../Models/SignupSchema')

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        const userInfo = new userSchema({
            email: user.email,
            password: user.password,
            rpassword: user.rpassword,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            company: user.company,
        })
        await userInfo.save();
        res.status(200).json({ message: 'form is submmited !' })

    }
    catch (err) {
        res.status(400).json({ message: "Something is wrong in server !" })
    }
})

module.exports = router;