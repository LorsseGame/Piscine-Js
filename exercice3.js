// Exercice 3: Créer une fonction de débogage
var test =  "hello";
// Créer une fonction debug qui prend en paramètre une variable et affiche son type et sa valeur.
function debog(variable) {
    console.log("Type: " + typeof variable);
    console.log("Value: " + variable);
}
// Appeler la fonction debug avec la variable test.
debog(test);
console.log("test");