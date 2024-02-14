// Exercice 2: Gérer les erreurs avec try...catch

try{
    functionNonExistante();

}catch(error){
    console.error("Erreur : "+error);
}



try{
    console.log("Début du programme");
    setTimeout(() => {
        console.log("Fin du programme");
    }, 1000);
}catch(error){
    console.error("Erreur : "+error);
}