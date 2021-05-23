document.getElementById('userSubmit').addEventListener('click', function(event){

	var x = document.getElementById('display');
    	if (x.style.display == 'none') {
        	x.style.display = 'block';
    	} else {
        	x.style.display = 'none';
    	}


	var req = new XMLHttpRequest();

	var textToTranslate = document.getElementById('userTranslation').value;
        var getLink = "https://portfive.net/text_app/translate?word1="+textToTranslate;

	req.open("GET", getLink, true);

        req.addEventListener('load', function() {
        if(req.status >= 200 && req.status < 400) {

        var response = req.responseText;
        console.log(response);

        document.getElementById('translated_text').textContent = response;
        }
        else {
                console.log("error in the request: " +req.statusText);
        }});
        console.log("test");

        req.send(null);
        event.preventDefault();

});

/*document.getElementById('try_again').addEventListener('click', function(event){

	var str = document.getElementById("translated_text");


	var a = str.value;
  	var b = r_text[i];
  	var ans = a.localeCompare(b);
  	var res = "";

  if (ans == 0) {
      res = alert("The translation entered was correct! \n trying again!");
    }
  else{
    res = alert("The translation entered was incorrect \n trying again!");
  }

  results.innerHTML = res;



window.location.reload()

});
*/

