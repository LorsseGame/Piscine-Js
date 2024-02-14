// Exercice 6: Utilisation de fetch pour récupérer des données d'une API
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
    headers: {
        Accept: 'application/json'
    }
})
    .then(r => {
        if (r.ok) {
            return r.json()
        } else {
            throw new Error('Erreur serveur', {cause: r})
        }
    })
    .then(posts => {
        console.log('La liste des articles : ', posts)
    })
    .catch(e => {
        console.error('Une erreur est survenue', e)
    })