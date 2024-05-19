const express = require('express');
const router = express.Router();
const User = require('../models/users');
router.post('/newUser', async (req, res)=>{
    const { name, email, password} = req.body;

    const newUser = new User({
        name,
        email,
        password
    });

    try{
       const savedUser = await newUser.save();
       res.json({msg:"Success", users: savedUser})
    }
    catch (e) {
        res.json(e).status(500);
    }
})
router.get('/check', async (req, res) => {
    try{
        const emailAndPass = await User.findOne({email: req.body.email});
        if(emailAndPass){
            res.json({msg:"User Credentials correct", user: emailAndPass});
        }
        else {
            res.json({msg: "User Credentials incorrect"});
        }
    }
    catch (e){
        res.json(e).status(500);
    }
})
module.exports = router;
