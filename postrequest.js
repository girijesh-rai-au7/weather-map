//in this project we use https get request to get weather information  from API and send that information to browser to 

const express = require('express')

const https = require('https')
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

   

app.post('/',(req,res)=>{
    
    const query = req.body.cityName;
    console.log(req.body.cityName);
    const url = "https://api.openweathermap.org/data/2.5/weather?q=query&appid=a602ee18b63e10a1276ceb0896049408&units=metric";

     https.get(url,(response)=>{
        response.on("data",(data)=>{
           const weatherData =  JSON.parse(data);
          console.log(weatherData);
          console.log(response.statusCode);
        
          const temp = weatherData.main.temp;
          console.log(temp);
          const weatherDescription = weatherData.weather[0].description;
          console.log(weatherDescription)
          const icon = weatherData.weather[0].icon;
          const imgURL = "http://openweather.org/img/wn/" + icon + " @2x.png";
          
          res.write("<p>The weather is currently +' weatherDescription'</p>")
           res.write("<p>The temperature in + 'query ' + is + 'temp'+ degree celsius</p>")
            res.write("<img src = + imgURL>")
        
         res.end();
            
        })
    })

    
})
 

app.listen(3000,()=>{
console.log("server is running");
});

// - Your API key is a602ee18b63e10a1276ceb0896049408