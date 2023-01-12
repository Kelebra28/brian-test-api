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

module.exports = router