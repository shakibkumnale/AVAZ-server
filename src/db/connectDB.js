
const mongoose = require("mongoose");
// mongodb://127.0.0.1:27017/ty_avaz
//  mongodb+srv://sayyedkamruddin332:skAVAZclg@avaz.l4kz0ja.mongodb.net/?retryWrites=true&w=majority&appName=avaz
mongoose.connect("mongodb+srv://sayyedkamruddin332:skAVAZclg@avaz.l4kz0ja.mongodb.net/?retryWrites=true&w=majority&appName=avaz",{
useNewUrlParser:true,
useUnifiedTopology:true
// useCreateIndex:true
}).then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log(e)
})
