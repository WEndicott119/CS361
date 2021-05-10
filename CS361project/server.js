const express = require("express");
const app = express()
app.set('port', 3546);

const axios = require('axios');
const cheerio = require('cheerio');

app.use(express.static(__dirname + '/views'));

 axios.get('https://en.wikipedia.org/wiki/Justin_Herbert')
       .then(response => {
       const html = response.data;
       const $ = cheerio.load(html);
       const scrapedata = $('.mw-parser-output').text();

       console.log(scrapedata);
   })

.catch((error) => {
console.log(error);
});

app.get('/',function(req,res){
res.status(200).sendFile(__dirname + '/views/index.html');
});

app.get('*', function(req,res){
res.status(404).sendFile(__dirname + '/views/404.html');
});


// listen on port specified with node index.js XXXX
app.listen(app.get('port'), () =>{
console.log("LISTENING ON PORT 3000!")});
