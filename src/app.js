// const User=require("./src/models/users")
const express = require('express')
const Users= require("./models/users")
const cors=require("cors")
require("./db/connectDB")
const nodemailer = require("nodemailer");
const randomstring = require('randomstring');


const mongoose = require("mongoose");
const otps = {};


const app = express()
const port = 3001
app.use(express.json());
app.use(cors())

const transporter = nodemailer.createTransport({
    service:'gmail',
     auth: {
       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
       user: "stkbantai1@gmail.com",
       pass: "nrtq aats jkdh rkoy",
     },
   });


app.post('/form', async(req, res) => {
    try {
     const {Fname, Lname, Email, Phone, Password, CPassword, City, Otp} =req.body;
     console.log(typeof(Otp),typeof(otps[Email]))
     if(Otp===otps[Email]){
          delete otps[Email];
         const User = new Users({
             
            
              Fname:Fname,
              Lname:Lname,
              Password:Password,
              City:City,
              Email:Email,
              Phone:Phone
          })
          const created= await User.save();
          console.log("one")
          res.send("success")
     }else{
          res.send("invalid")
     }

    } catch (error) {
         console.log("done"+error);
         res.send("hello")       
    }
   
    })
app.post('/otp', async(req, res) => {
      const {Email}=req.body;
      const otp = randomstring.generate({ length: 6, charset: 'numeric' });
      otps[Email]=otp;
    console.log(Email);
        var option ={
          from: "stkbantai1@gmail.com", // sender address
          to: Email, // list of receivers
          subject: "Hello ✔", // Subject line
          // text: ` your otp is ${otp} `, // plain text body
          
          attachments: [{
               filename: 'Avaz-logo2.png',
               path: __dirname+'/Avaz-logo2.png',
               cid: 'myImg'
             }],
         html:`<!DOCTYPE html>
         <html lang="en">
           <head>
             <meta charset="UTF-8" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <meta http-equiv="X-UA-Compatible" content="ie=edge" />
             <title>Static Template</title>
         
             <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
               rel="stylesheet"
             />
           </head>
           <body
             style="
               margin: 0;
               font-family: 'Poppins', sans-serif;
               background: #ffffff;
               font-size: 14px;
             "
           >
             <div
               style="
                 max-width: 680px;
                 margin: 0 auto;
                 padding: 5px 30px 60px;
                 background: #f4f7ff;
                 background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
                 background-repeat: no-repeat;
                 background-size: 800px 452px;
                 background-position: top center;
                 font-size: 14px;
                 color: #434343;
               "
             >
               <header style="height: 130px;">
                 <table style="width: 100%;">
                   <tbody>
                     <tr style="height: 160px;">
                       <td>
                         <img
                           alt=""
                           src= "cid:myImg"
                           height="190px"
                           
         
                         />
                       </td>
                       <td style="text-align: right;">
                         <span
                           style="font-size: 16px; line-height: 30px; color: #ffffff;"
                           >12 Nov, 2021</span
                         >
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </header>
         
               <main>
                 <div
                   style="
                     margin: 0;
                     margin-top: 70px;
                     padding: 92px 30px 115px;
                     background: #ffffff;
                     border-radius: 30px;
                     text-align: center;
                   "
                 >
                   <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                     <h1
                       style="
                         margin: 0;
                         font-size: 24px;
                         font-weight: 500;
                         color: #1f1f1f;
                       "
                     >
                       Your OTP
                     </h1>
                     <p
                       style="
                         margin: 0;
                         margin-top: 17px;
                         font-size: 16px;
                         font-weight: 500;
                       "
                     >
                      ${Email},
                     </p>
                     <p
                       style="
                         margin: 0;
                         margin-top: 17px;
                         font-weight: 500;
                         letter-spacing: 0.56px;
                       "
                     >
                       Thank you for choosing AVAZ. Use the following OTP
                       to complete the registeration . OTP is
                       valid for
                       <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
                       Do not share this code with others, including AVAZ
                       employees.
                     </p>
                     <p
                       style="
                         margin: 0;
                         margin-top: 60px;
                         font-size: 40px;
                         font-weight: 600;
                         letter-spacing: 25px;
                         color: #ba3d4f;
                       "
                     >
                     ${otp}
                     </p>
                   </div>
                 </div>
         
                 <p
                   style="
                     max-width: 400px;
                     margin: 0 auto;
                     margin-top: 90px;
                     text-align: center;
                     font-weight: 500;
                     color: #8c8c8c;
                   "
                 >
                   Need help? Ask at
                   <a
                     href="mailto: stkbantai1@gmail.com"
                     style="color: #499fb6; text-decoration: none;"
                     >AVAZ@gmail.com</a
                   >
                   or visit our
                   <a
                     href=""
                     target="_blank"
                     style="color: #499fb6; text-decoration: none;"
                     >Help Center</a
                   >
                 </p>
               </main>
         
               <footer
                 style="
                   width: 100%;
                   max-width: 490px;
                   margin: 20px auto 0;
                   text-align: center;
                   border-top: 1px solid #e6ebf1;
                 "
               >
                 <p
                   style="
                     margin: 0;
                     margin-top: 40px;
                     font-size: 16px;
                     font-weight: 600;
                     color: #434343;
                   "
                 >
                   AVAZ
                 </p>
                 <p style="margin: 0; margin-top: 8px; color: #434343;">
                  1st Rabodi, Thane (West), 400601
                 </p>
                 <div style="margin: 0; margin-top: 16px;">
                   <a href="" target="_blank" style="display: inline-block;">
                     <img
                       width="36px"
                       alt="Facebook"
                       src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                     />
                   </a>
                   <a
                     href=""
                     target="_blank"
                     style="display: inline-block; margin-left: 8px;"
                   >
                     <img
                       width="36px"
                       alt="Instagram"
                       src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
                   /></a>
                   <a
                     href=""
                     target="_blank"
                     style="display: inline-block; margin-left: 8px;"
                   >
                     <img
                       width="36px"
                       alt="Twitter"
                       src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                     />
                   </a>
                   <a
                     href=""
                     target="_blank"
                     style="display: inline-block; margin-left: 8px;"
                   >
                     <img
                       width="36px"
                       alt="Youtube"
                       src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
                   /></a>
                 </div>
                 <p style="margin: 0; margin-top: 16px; color: #434343;">
                   Copyright © 2022 Company. All rights reserved.
                 </p>
               </footer>
             </div>
           </body>
         </html>
         `,
      // html body
        };
        transporter.sendMail(option,function(error,info){
          if(error){
               console.log(error);
               res.send(error);
          }else{
               res.send("done");
          }

        })

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))