// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test
var personnes = [
  { nom: "Pierre", age: 25 },
  { nom: "Paul", age: 17 },
  { nom: "Jacques", age: 30 },
];

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

verifMajeur(personnes);
