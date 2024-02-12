// Exercice 5: Créer une fonction de temporisation

// Créer une fonction delay qui prend en paramètre une fonction et un délai en millisecondes. La fonction doit appeler la fonction passée en paramètre après le délai spécifié.
function delay(callback, wait) {
  setTimeout(callback, wait);
}
// Appeler la fonction delay avec une fonction qui affiche "Hello" après 1 seconde.
delay(function () {
  console.log("Hello");
}, 1000);
