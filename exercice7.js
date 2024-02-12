// Exercice 7: Implémenter une fonction de réduction personnalisée

var prix = 548;

var reduction = 20;

function reduce(prix, reduction) {
    return prix / 100 * (100 - reduction);
}

console.log(reduce(prix, reduction));