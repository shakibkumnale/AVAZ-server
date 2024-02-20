const  mongoose  = require("mongoose");
// require("../db/connectDB")

const userSchegma= new mongoose.Schema({
Fname:{
    type:String,
    required:true

},
Lname:{
    type:String,
    required:true

},
Password:{ 
    type:String,
    required:true
},

City:{ 
    type:String,
    required:true
},

Email:{ type:String,
    required:true,
    unique: true 
},

Phone:{ type:String,
    required:true,
    unique:true
}
});


const User = new mongoose.model("User",userSchegma);
 module.exports= User;  