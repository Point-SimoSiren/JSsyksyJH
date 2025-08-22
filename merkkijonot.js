
let emails = ["jani.hassi@careeria.fi", "aki.kanerva@careeria.fi"]

//emails.forEach(function(email) {
emails.forEach(email => {
    
let nimiOsa = email.split("@")[0]
//console.log(nimiOsa)

let etuNimi = nimiOsa.split(".")[0]

let sukuNimi = nimiOsa.split(".")[1]

console.log("Etunimi: " + etuNimi)
console.log("Sukunimi: " + sukuNimi)
console.log("Maatunnus: " + email.split("a.")[1])

})
