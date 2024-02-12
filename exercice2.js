// Exercice 2: Trouver le plus grand nombre dans un tableau
var table = [1, 2, 3, 4, 5, 6];
var nbMax = 0;


for (var i = 0; i < table.length; i++) {
    if (table[i] > nbMax) {
        nbMax = table[i];
    }
}
console.log("Le plus grand nombre dans un tableau : " + nbMax);