// Exercice 2: Regrouper des éléments d'un tableau par propriété

// Créer un tableau de personnes avec les propriétés suivantes: id, name, age, country.
var data = [
  { id: 1, name: "John", age: 28, country: "Canada" },
  { id: 2, name: "Jane", age: 32, country: "USA" },
  { id: 3, name: "Bob", age: 25, country: "Canada" },
  { id: 4, name: "Alice", age: 35, country: "USA" },
  { id: 5, name: "Eve", age: 40, country: "Canada" },
];
// Créer un objet qui regroupe les personnes par pays.
var groupedData = {
    Canada: [],
    USA: [], 
};

// Parcourir le tableau de personnes et ajouter chaque personne à l'objet regroupé selon son pays.
 
for (var i = 0; i < data.length; i++) {
    if (data[i].country == "Canada") {
        groupedData.Canada.push(data[i].name);
    } else if (data[i].country == "USA") {
        groupedData.USA.push(data[i].name);
    }
}

// Afficher le résultat
console.log(groupedData);