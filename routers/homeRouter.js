const express = require('express');
const Router= express.Router();

Router.get('/',(err,res)=>{
    res.render('register',{title:'Nodejs'})
})
module.exports=Router;