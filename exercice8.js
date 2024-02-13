// Exercice 8: Trier un tableau d'objets par plusieurs propriétés
const personnes = [
    { nom: 'Pierre', age: 25 },
    { nom: 'Paul', age: 20 },
    { nom: 'Jacques', age: 30 }
  ];
  
  personnes.sort((a, b) => {
    // Trier par nom
    if (a.nom < b.nom) return -1;
    if (a.nom > b.nom) return 1;
  
    // Si les noms sont égaux, trier par âge
    return a.age - b.age;
  });
  
  console.log(personnes);