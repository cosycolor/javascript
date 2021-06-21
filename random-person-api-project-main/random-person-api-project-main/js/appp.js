(function () {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    getPerson();
  });

  function getPerson() {
    axios
      .get("https://randomuser.me/api/")
      .then((result) => {
        showData(result);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  }
  function showData(result) {
    // const data = JSON.parse(result.data.results[0]);
    const {
      name: { first },
      name: { last },
      picture: { large },
      location: { street },
      phone,
      email,
    } = result.data.results[0];

    document.getElementById("first").textContent = first;
    document.getElementById("last").textContent = last;
    document.getElementById("street").textContent = street;
    document.getElementById("phone").textContent = phone;
    document.getElementById("email").textContent = email;
    document.getElementById("photo").src = large;
  }
})();
