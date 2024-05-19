const express = require('express');
const router = express.Router();
const Poops = require('../models/poop');

// Create a new poop entry
router.post('/save', async (req, res) => {
    const { description, email, size, date } = req.body;

    const newPoop = new Poops({
        description,
        email,
        size,
        date
    });

    try {
        const savedPoop = await newPoop.save();
        res.status(201).json(savedPoop);
    } catch (e) {
        res.json(e).status(500);
    }
});

// Get all poop entries
router.get('/all', async (req, res) => {
    try {
        const poops = await Poops.find();
        res.json(poops);
    } catch (e) {
        res.json(e).status(500);
    }
});

router.put('/update/:id', async (req, res)=>{
    try{
        const updatePoops = await Poops.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({msg: "Success", poop: updatePoops}).status(200);
    }
    catch (err) {
        res.json(err).status(500);
    }
})

router.delete('/delete/:id', async (req, res) =>{
    try{
        const deletePoops = await Poops.findByIdAndDelete(req.params.id);
        res.json({msg: "Success", poop: deletePoops}).status(200);
    }
    catch (e) {
        res.json(e).status(500);
    }
})

router.post('/5poops', async (req, res) =>{
    try {
        const mostRecentPoops = await Poops.find({email: req.body.email}).sort({date: 1}).limit(5);
        res.json({msg: "Success", poop: mostRecentPoops})
    }
    catch (e) {
        res.json(e).status(500);
    }
})

router.post('/allPoops', async (req, res)=> {
    try{
        const allPoops = await Poops.find({email: req.body.email}).sort({date: 1});
        res.json({msg: "Success", poop: allPoops});
    }
    catch (e) {
        res.json(e).status(500);
    }
})

module.exports = router;
