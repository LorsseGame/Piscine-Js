// Exercice 7: Implémenter une fonction de réduction personnalisée
let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Utiliser la méthode reduce pour calculer la somme des éléments du tableau
let initial = 0;

sumWithInitial = table.reduce((acc, value) => acc + value, initial);
// Afficher le résultat
console.log(sumWithInitial); 