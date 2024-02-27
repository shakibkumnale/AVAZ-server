// कमरुद्दीन कोड 
const express=require("express")
const app=express()
const OpenAI = require("openai");
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const openai = new OpenAI({
  apiKey: "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"
});

const openFun=async(q)=>{
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": q,}],
    // max_tokens:100
  });
  console.log(chatCompletion.choices[0].message.content);
  return chatCompletion.choices[0].message.content
}

app.get("/GET",(req,res)=>{
  res.send("GET PAGE")
})
app.post("/POST",async(req,res)=>{
    const res1=req.body
    console.log(res1.query)

    res.send( await openFun(res1.query))

})
app.get("/ai",async(req,res)=>{
    // res.send( await openFun())
})
app.listen(8000,()=>{
    console.log("listening")
})