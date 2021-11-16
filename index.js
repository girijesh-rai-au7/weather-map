// making get request using https get module 
//how to parse json
//Sending response back from Node.js server to browser
const express = require("express");
const app = express()
app.use(express.urlencoded({extended:true}))
//to use https module first require it
const https = require("https");
app.get("/",(req,res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=a602ee18b63e10a1276ceb0896049408&units=metric";
    

https.get(url, (res) => {
  console.log(res)
  //parse data from here using res.on method

  res.on("data", function (data){
   const weatherData = JSON.parse(data)
   const temp = weatherData.main.temp
   console.log(weatherData);
   console.log(temp);
  
   res.write("<h1>'temp'</h1>")
   res.end();
   
  
   
  
  })
  

  })
 

  
})
app.listen(3000,()=>{
console.log("Server is running at port 3000")
})