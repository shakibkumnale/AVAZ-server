const  mongoose  = require("mongoose");
// require("../db/connectDB")
const jwt =require("jsonwebtoken");

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
},
tokens:[{
    token:{
    type:String
    // required:true
    }
}]
});
userSchegma.methods.generateAuthToken = async function(){
    try {
    
    const token = jwt.sign({_id: this._id.toString()}, "Shakib");
    this.tokens = this.tokens.concat({token: token});
    
    await this.save();
    return token; 
    
    }catch (error) {
    // res.send("the error part" + error);
    console.log("the error part" + error);
    }
}


const User = new mongoose.model("User",userSchegma);
 module.exports= User;  