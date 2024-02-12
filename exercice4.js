// Exercice 4: Trouver un élément dans un tableau d'objets
var table = ['Pomme','fraise','raison']

for (let i = 0; i < table.length; i++) {
    
    if(table[i] == 'fraise'){
        console.log('Vous avez trouver: ' + table[i])
        break
    }
    console.log(i)
}