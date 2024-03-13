const jwt=require('jsonwebtoken')
const Users=require('./models/users')



const auth=async(req,res,next)=>{
    try {
        
        const {Cget}=req.body
        console.log(Cget+"........AUTH");
        const verifyTOKEN=jwt.verify(Cget,"Shakib")
        console.log(verifyTOKEN);
        const findUser=await Users.findOne({_id:verifyTOKEN._id})
        // findUser.tokens=[]
        // await findUser.save()
        req.user=findUser;
        req.token=Cget
        // const f=findUser.tokens.filter((ele)=>{
        //     // console.log(ele.token);
        //     return ele.token!=Cget
        // })
        // console.log(f);
        // console.log(findUser.tokens);
    //     const {Fname, Lname, Email, Phone, City,tokens}=findUser;
    // const uData={Fname, Lname, Email, Phone, City}
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports=auth