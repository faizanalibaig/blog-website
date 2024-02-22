const express=require('express');
const router= express.Router();

router.get('', (req,res)=>{
    const locals={
        title:'Zod | Contact',
        description:'You can contact us through multiple mediums. Contact us if you have any query. Thank you'
    }
    res.render('./contact', {locals})
})

module.exports= router