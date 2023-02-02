const express = require('express')
const AnnonimousUser = require('../models/AnnonimousUser')


const router = express.Router()


// Create Annonimous User
router.post('/createAnnonimousUser/', async (req, res) => {
    try {
        const annonimpusUser = new AnnonimousUser(req.body)
        const userCreate =  await annonimpusUser.save()
        res.status(201).send({ userCreate })
    } catch (err) {
        res.status(400).send(err)
        console.log(err)
        res.json({
            message: err
        })
    }
})

// All Anonnimos  Users
router.get('/annonimousUsers/', async (req, res) => {
    console.log('entra aqui');
    console.log(req);
    console.log(res);
    try{
        console.log(res);
        const users = await AnnonimousUser.find()
        console.log(users);
        res.json(users)
    }catch(err){
        console.log(err);
        res.json({
            message: err
        })
    }
})

module.exports = router