// Exercice 9: Inverser une chaîne de caractères
var str = "Hello World";
var reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);