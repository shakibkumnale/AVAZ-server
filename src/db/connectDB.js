
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sayyedkamruddin332:skAVAZclg@avaz.l4kz0ja.mongodb.net/?retryWrites=true&w=majority&appName=avaz",{
useNewUrlParser:true,
useUnifiedTopology:true
// useCreateIndex:true
}).then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log(e)
})
