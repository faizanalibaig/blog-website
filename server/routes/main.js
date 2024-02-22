const express= require('express')
const router=express.Router()

router.get('',(req, res)=>{
    const locals={
        title:'Nodejs Blog',
        description:'blog application'
    }
    res.render('./layouts/index', {locals});
})

module.exports= router