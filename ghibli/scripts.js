const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

// create a request variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest();

// open new connection, utilizing the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  // start accessing JSON data
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // create div with card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // create an h1 and make the text the film's title
      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      // create a p and set the text to the film's description
      const p = document.createElement("p");
      // 300 char limit
      movie.description = movie.description.substring(0, 300);
      // end with ellipses
      p.textContent = `${movie.description}...`;

      // append cards to the container
      container.appendChild(card);

      // each card will contain h1 and p
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    console.log("error");
  }
};

request.send();
