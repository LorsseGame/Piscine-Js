// Exercice 3: Filtrage avec des expressions régulières
var sites = { 
    links: [
        {href: 'https://www.example.com/v1/contact-us/ca'},
        {href: 'https://www.example.com/v1/contact-us/au'},
        {href: 'https://www.example.com/v1/contact-us/us'},
        {href: 'https://www.example.com/v1/dontcontact-us/us'},
        {href: 'https://www.contact.com/v1/dontcontact-us/us'}
    ]
};

const regex = new RegExp('/contact\\b', 'g');
const matchedSites = sites.links.filter(({href}) => href.match(regex));
console.log(matchedSites);