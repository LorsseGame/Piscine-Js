// // Exercice 10: Exécuter des promesses en série
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function wait2Seconde() {
//   try {
//     await sleep(1000);
//     await sleep(1000);
//     console.log("1");
//   } catch (err) {
//     console.error(err);
//   }
// }

// wait2Seconde();

// Exercice 10: Exécuter des promesses en série
let animals = [{
    name: "Lion",
    legs: 4,
    especes: "mammifère"
}, {
    name: "Tortue",
    legs: 4,
    especes: "reptile"
}, {
    name: "Araignée",
    legs: 8,
    especes: "arachnide"
}, {
    name: "Fourmi",
    legs: 6,
    especes: "insecte"
}, {
    name: "Poulet",
    legs: 2, 
    especes: "oiseau"
},
{
    name:"chien",
    legs: 4,
    especes: "mammifère"
}];


function checkIsMammifere(animals){
  return new Promise((resolve, reject) => {
    if(animals.especes === "mammifère"){
      resolve("C'est un mammifère");
    }else{
      reject("Ce n'est pas un mammifère");
    }
  });
}

animals.forEach(value => {
    checkIsMammifere(value)
        .then((resolve) => console.log(resolve))
        .catch(reason => console.log(reason));
});

