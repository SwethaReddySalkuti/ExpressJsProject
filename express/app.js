//const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin.js');

const shopRouter = require('./routes/shop.js');



app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRouter);

app.use('/shop',shopRouter);

app.use((req,res,next) => {
    res.status(404).send('<h1>Error  Page Not Found</h1>');
})


app.listen(2100);


