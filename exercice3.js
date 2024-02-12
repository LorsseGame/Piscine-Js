// Exercice 3: Filtrer les nombres pairs d'un tableau
var table = [1, 2, 3, 4, 5];
var nbPair = [];

for (let i = 0; i < table.length; i++) {
    if (table[i] % 2 == 0) {
        console.log(i);
        nbPair.push(table[i]);  // Ajouter l'élément pair directement à nbPair
    }
}

console.log(nbPair);
