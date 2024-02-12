// Exercice 7: Vérifier si un mot est un palindrome
var mot = 'ici'

function reverseString(str){ 
	return str.split("").reduce((acc, char) => char + acc, ""); ;
} 

var motInverser = reverseString(mot);

console.log(motInverser);

if(mot == motInverser){
    console.log('Votre mot est un palindrome');
}else{
    console.log("Votre mot n'est pas un palindrome");
}