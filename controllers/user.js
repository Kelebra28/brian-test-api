
const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')

const router = express.Router()

// Create a new user
router.post('/createUser/', async (req, res) => {
    try {
        const user = new User(req.body)
        const userCreate =  await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ userCreate, token })
    } catch (err) {
        res.status(400).send(err)
        console.log(err)
        res.json({
            message: err
        })
    }
})

// Login user 
router.post('/login/', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        .catch(err => console.log('--------error----',err))
        if (!user) {
            return res.status(401).send({error: 'Login failed'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch(err) {
        res.status(400).send(err)
        console.log(err)
        res.json({
            message: err
        })
    }

})

// All Users
router.get('/users/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.json({
            message: err
        })
    }
})

// User me
router.get('/me', auth, async(req, res) => {
    try{
        res.send(req.user)
        
    }catch(err){
        res.json({
            message: err
        })
    }
})

// User Logout
router.post('/me/logout/', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})


// User Id
router.get('/:userId/', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        res.json(user)
    }catch(err){
        res.json({
            message: err
        })
    }
}) 

// Update User
router.patch('/:userId/', async (req, res) =>{
    try{
        const updateUser = await User.updateOne(
            { _id : req.params.userId },
            { $set: { first_name : req.body.first_name}}
            )
        res.json(updateUser)
    }catch(err){
        res.json({
            message: err
        })
    }
})

// Delete User
router.delete('/:userId/', async (req, res) => {
    try{
        const removedUser = await User.remove({
            _id: req.params.userId 
         })
         res.json(removedUser)
    }catch(err){
        res.json({
            message: err
        })
    }
})


module.exports = router