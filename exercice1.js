// Exercice 1: Supprimer les éléments falsy d'un tableau
var tableau = [1, 0, false, true, "", "hello", null, undefined, NaN];
// Créer une fonction filterFalsy qui prend en paramètre un tableau et retourne un nouveau tableau sans les éléments falsy.
var newTab = tableau.filter(Boolean);
// Afficher le nouveau tableau
console.log(newTab);
