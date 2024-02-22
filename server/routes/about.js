const express= require('express')
const router=express.Router()

router.get('',(req, res)=>{
    const locals={
        title:'Zod | About',
        description:'This is our simple blog created with nodejs expressjs and mongoDB.'
    }
    res.render('./about', {locals})})

module.exports= router