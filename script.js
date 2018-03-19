// create elements to add logo and container

var app = document.getElementById('root');

var logo = document.createElement('img');
logo.src = 'news.png';

var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo); // append to the root
app.appendChild(container);



// get json data from api

var request = new XMLHttpRequest(); // call new xml request

request.open('GET','https://newsapi.org/v2/top-headlines?' + 
          		 'country=us&' +
          		 'apiKey=6c13a32e23b643989e19a722674ca873', true); // open and get the api json data

request.onload = function(){ // data onload
	var data = JSON.parse(this.response); // parsing the response from json

	for(var i=0; i<data.articles.length; i++){ // to loop through the datas

		console.log(data.articles);

		//console.log(data.articles[i].title);
		//console.log(data.articles[i].description);

		var card = document.createElement('div'); // create elements for card and within h1 and p
		card.setAttribute('class', 'card');

		var h1 = document.createElement('h1');
		h1.textContent = data.articles[i].title;

		var p = document.createElement('p');
		p.textContent = data.articles[i].description;

		container.appendChild(card); // appending to container

		card.appendChild(h1); // appending to card
		card.appendChild(p);
	}
	
}

request.send(); // sending data back to json file

