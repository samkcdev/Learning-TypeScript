(function() {
  var button = document.querySelector(".button");
  var input = document.querySelector(".form-control");
  console.log(input);
  var messegner = document.querySelector(".message");
  button.addEventListener("click", function greetButton() {
    console.log("sam");
    messegner.innerHTML = "Hola! " + input.value;
  });
})();
