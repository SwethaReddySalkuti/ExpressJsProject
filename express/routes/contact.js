const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path.js');

router.get('/contact-us',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

router.post('/contact-us',(req,res,next) => {
    console.log(req.body);
    res.redirect('/succ');
});


module.exports=router;