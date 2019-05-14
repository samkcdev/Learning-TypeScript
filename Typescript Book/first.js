(function () {
    var button = document.querySelector(".button");
    var input = document.querySelector(".form-control");
    var errmsg = document.querySelector(".errorMsg");
    var messegner = document.querySelector(".message");
    button.addEventListener("click", greetButton("Hello", "No Name Entered"));
    function greetButton(prefix, errorMsg) {
        console.log(input.value);
        messegner.innerHTML = prefix + input.value;
        return function (e) {
            if (input.value.length === 0) {
                return (errmsg.innerHTML = errorMsg);
            }
        };
    }
})();
