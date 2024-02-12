// Exercice 5: Compter les occurrences d'une lettre dans une chaîne
var text = 'Hello Worlld'
var count = 0 ;

for (let i = 0; i < text.length; i++) {
    
    if(text[i] == 'o'){
        count++
    }
    
}

console.log(count)