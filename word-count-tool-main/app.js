let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let input = document.querySelector("#str");

  let output = document.querySelector("#output");
  output.innerHTML = input.value.length;
});
