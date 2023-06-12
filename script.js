function fetchJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      displayJoke(data.value);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayJoke(joke) {
  const jokeText = document.getElementById("joke-text");
  jokeText.textContent = joke;
}

// Fetch and display the initial joke
fetchJoke();