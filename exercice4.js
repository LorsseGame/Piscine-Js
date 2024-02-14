// Exercice 4: Création d'une fonction de debounce

let input = document.getElementById("input");

function debounce(callback, delay) {
  var timer;
  return function () {
    var args = arguments;
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, delay);
  };
}

input.addEventListener("keyup", (event) => {
  debounce(() => {
    console.log(event.target.value);
  }, 600); // Appel de la fonction débouncée
});
