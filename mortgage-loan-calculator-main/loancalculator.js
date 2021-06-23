function computeLoan() {
  let input = document.querySelector("#amount");
  let interest = document.querySelector("#interest_rate");
  let months = document.querySelector("#months");
  let payment = document.querySelector("#payment");

  let output = (input.value * (1 + interest.value * 0.01)) / months.value;
  let total = output.toFixed(2);
  payment.innerHTML = "Monthly Payment = " + total;
}
