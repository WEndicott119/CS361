const express = require("express");
const app = express()
app.set('port', 3547);
const fs = require('fs');

const cheerio = require("cheerio");
const axios = require('axios');
const htmlParser = require("node-html-parser");

app.use(express.static(__dirname + '/views'));

var data;

app.get('/scrape', function(req, res){

let word = req.query.word;
let wikiLink = "https://en.wikipedia.org/wiki/" + word;

axios.get(wikiLink)
      .then(response => {

       const html = htmlParser.parse(response.data);
       const pageContent = html.querySelector(".mw-parser-output");
       const pElements = pageContent.querySelectorAll("p");
       const elements = (pElements[2].rawText);

	      res.send(pElements[2].rawText);
	})

	.catch((error) => {
   	console.log(error);
 	});


});


//document.getElementById('userSubmit').addEventListener('click', function(event){

//	console.log("test1");
//	var req = new AxiosRestAndEvents();
//	var textToTranslate = r_text[i];
//	var getLink = "https://portfive.net/text_app/translate?word1=" + textToTranslate;

//	req.open("GET", getLink, true);
//	req.addEventListener('load', function() {
//	if(req.status >= 200 && req.status < 400) {	

//	var response = req,responseText;
//	console.log(response);

//	document.getElementById('translated_text').textContent = response;
//	}
//	else {
//		console.log("error in the request: " +req.statusText);
//	}});
//	console.log("test");

//	req.send(null);
//	event.preventDefault();
//});


app.get('/',function(req,res){
res.status(200).sendFile(__dirname + '/views/index.html');

});


app.get('*', function(req,res){
  res.status(404).sendFile(__dirname + '/views/404.html');
});


// listen on port specified with node index.js XXXX
app.listen(app.get('port'), () =>{
console.log("LISTENING ON PORT 3000!")});
