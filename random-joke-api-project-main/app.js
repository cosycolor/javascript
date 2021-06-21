const image = document.querySelector("img");
const jokeDIV = document.querySelector("#display-joke");
const button = document.querySelector("#get-joke");

button.addEventListener("click", function () {
  getRandomJoke();
});

function getRandomJoke() {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((result) => {
      jokeDIV.innerHTML = `${result.data.value}`;
    })
    .catch((error) => {
      console.log("에러", error);
      jokeDIV.textContent = "There was an error";
    });
}
