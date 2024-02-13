// Exercice 6: Filtrer un tableau d'objets par une plage de dates

var tab = [ 
    { date: "2019-12-10" }, 
    { date: "2019-12-11" }, 
    { date: "2019-9-12" }, 
    { date: "2019-12-13" }, 
    { date: "2019-12-14" }, 
    { date: "2019-11-15" }, 
    { date: "2019-12-16" }, 
    { date: "2019-02-17" }, 
    { date: "2019-12-18" }, 
    { date: "2019-12-19" } 
];
// Créer une fonction filterByDate qui prend en paramètre un tableau d'objets et une date de début et une date de fin. La fonction doit retourner un tableau contenant les objets dont la date est comprise entre la date de début et la date de fin.
function filterByDate(tab, start, end) {
    return tab.filter( (element) => {
        return element.date >= start && element.date <= end;
    });
}
// Appeler la fonction filterByDate avec le tableau tab et les dates "2019-11-12" et "2019-12-31".
console.log(filterByDate(tab, "2019-11-12", "2019-12-31"));