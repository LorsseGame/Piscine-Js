// Exercice 1: Utilisation de Promise.all
var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
    resolve("un");
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "deux");
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "trois");
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "quatre");
  });
  
  //On peut aussi employer .catch
  Promise.all([p1, p2, p3, p4])
    .then((values) => {
      console.log(values);
    })
    .catch((reason) => {
      console.log(reason);
    });
  
  // Dans la console :
  // "rejet"
  