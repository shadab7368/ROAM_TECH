
let express = require('express');
let dotenv=require('dotenv')
let bodyParser= require('body-parser')

dotenv.config({path:'./config.env'})
let mongooose=require('mongoose')
 mongooose.connect(process.env.mongoUrl)
//mongooose.connect('mongodb://localhost:27017/website_tut')
if(mongooose.connection.on){
    console.log("db connected")
    }else{
        console.log("db not connected")
    }
let app= express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/public/'))
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
res.send('this is front page')
})


let adminroute=require('./route/backend/admin')
let pageroute=require('./route/backend/page')
app.use('/admin',adminroute)
app.use('/admin/page',pageroute)













app.listen(process.env.PORT,()=>{
    console.log('server start')
})