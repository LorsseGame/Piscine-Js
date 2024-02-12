// Exercice 10: Convertir une chaîne de caractères en camelCase
var text = "objetmodifier ";


function camelCase(text) {
    var newText = "";
    for (var i = 0; i < text.length; i++) {
        if (i == 5) {
            newText += text[i].toUpperCase();
        } else {
            newText += text[i].toLowerCase();
        }
    }
    return newText;
}

console.log(camelCase(text));