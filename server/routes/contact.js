const express=require('express');
const router= express.Router();

router.get('', (req,res)=>{
    const locals={
        title:'Nodejs Contact',
        description:'blog application'
    }
    res.render('./contact', {locals})
})

module.exports= router