// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test
var personnes = [
  { nom: "Pierre", age: 25 },
  { nom: "Paul", age: 17 },
  { nom: "Jacques", age: 30 },
];
// Créer une fonction verifMajeur qui prend en paramètre un tableau d'objets et retourne vrai si tous les éléments ont un âge supérieur ou égal à 18, sinon faux.
function verifMajeur(personnes) {
    var count = 0;
  for (let i = 0; i < personnes.length; i++) {
    if (personnes[i].age < 18) {
     count ++;
    }
  }

  if(count >0){
    console.log("Les personne ne sont pas tous majeur.")
  }else{
    console.log("Les personne sont tous majeur.")
  }
}
// Appeler la fonction verifMajeur avec le tableau personnes.
verifMajeur(personnes);
