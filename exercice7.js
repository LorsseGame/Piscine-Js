// Exercice 7: Implémenter une fonction de réduction personnalisée
var prix = 548;
var reduction = 20;
// Créer une fonction reduce qui prend en paramètre un prix et une réduction et retourne le prix après réduction.
function reduce(prix, reduction) {
    return prix / 100 * (100 - reduction);
}
// Appeler la fonction reduce avec les valeurs 548 et 20.
console.log(reduce(prix, reduction));