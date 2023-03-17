const express =require('express')
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const homeRouter=require('./routers/homeRouter')
const port =process.env.port || 3000;

const app = express();

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',homeRouter)




app.listen(port)