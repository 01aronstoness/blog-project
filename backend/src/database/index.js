var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Blog').then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log("Database Not Connected", error)
})


module.exports = mongoose;