// Alustetaan taulukko
const puhelimet = ["Oppo", "Apple", "Samsung", "Honor"]

// Käydään em. taulukko läpi forEach silmukassa
// jokainen alkio saa aliasnimen puh

// Taulukkoon voidaan lisätä alkioita push komennolla
puhelimet.push("Nokia")

puhelimet.forEach(puh => {

    if (puh === "Apple") {
         console.log("Tämä EI OLE Android puhelin: ")
    }
    else {
        console.log("Tämä ON Android puhelin: ")
    }
    console.log(puh)
    console.log("-------------------------")
})

// Suorita: node silmukka.js

