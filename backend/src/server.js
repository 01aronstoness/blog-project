const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Database = require('./database')
const userRoute  = require('./routes/UserRoute');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/user', userRoute);


app.listen(3001,function(err){
 if(err) { console.log("Server contain Error", err)}
 console.log("Server is Started at url : http://localhost:3000")
})