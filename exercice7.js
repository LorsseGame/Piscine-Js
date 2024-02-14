// Exercice 7: Manipulation avancée d'objets
const responsable = {
    nom: "Jean",
    age: 27,
    poste: "Ingénieur logiciel",
  };
  
  const stagiaire = {
    nom: "Ben",
    age: 21,
    poste: "Stagiaire ingénieur logiciel",
  };
  
  function direBonjour() {
    console.log("Bonjour, mon nom est", this.nom);
  }

  function direAuRevoir(objet2){
    console.log(this.nom +" dit au revoir à "+ objet2.nom);
  }
  
  // on ajoute direBonjour aux deux objets
  responsable.direBonjour = direBonjour;
  stagiaire.direBonjour = direBonjour;
  responsable.direAuRevoir = direAuRevoir;
  
  responsable.direBonjour(); 
  stagiaire.direBonjour(); 
  responsable.direAuRevoir(stagiaire);
  
  