(function() {
  var button: Element = document.querySelector(".button");
  var input: HTMLInputElement = <HTMLInputElement>(
    document.querySelector(".form-control")
  );

  var errmsg: HTMLElement = document.querySelector(".errorMsg");
  var messegner: HTMLElement = document.querySelector(".message");
  button.addEventListener("click", greetButton("Hello ", "No Name Entered"));

  function greetButton(prefix: string, errorMsg: string) {
    return function(e: MouseEvent) {
      if (input.value.length === 0) {
        return (errmsg.innerHTML = errorMsg);
      }
      messegner.innerHTML = prefix + input.value;
    };
  }
})();
