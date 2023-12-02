document.getElementById("mybutton").addEventListener("click", modellar);

function modellar() {
    let ar = 0;
    let nem = "";
    let Szolg = "";

    // Nem kiválasztása
    if (document.getElementById("no").checked) nem = "Nő";
    if (document.getElementById("ferfi").checked) nem = "Férfi";

    // Óra
    let ora = Number(document.getElementById("ido").value);

    // Hétvége
    if (document.getElementById("hetvege").checked) ar += 5000;

    // Szolgáltatás
    if (document.getElementById("divat").checked) { ar += 8000 * ora; Szolg = "Divatfotózás"; }
    if (document.getElementById("portre").checked) { ar += 6000 * ora; Szolg = "Portréfotózás"; }
    if (document.getElementById("katalog").checked) { ar += 7000 * ora; Szolg = "Katalógusfotózás"; }
    if (document.getElementById("kifuto").checked) { ar += 10000 * ora; Szolg = "Kifutómodellkedés"; }

    let pSzoveg;
    let pKep;

    if (ar <=5000 || nem == "" || Szolg == "") {
        // Összegzés létrehozása
        pSzoveg = document.createTextNode(`Kérlek válassz ki minden lehetséges opciót!`);
    } else {
        // Összegzés létrehozása
        pSzoveg = document.createTextNode(`Az általad választott modell ${nem}, aki ${Szolg} keretében lesz a segítségedre. Végösszeg: ${ar}Ft`);

        // Kép hozzáadása
        let kep = document.createElement('img');
        kep.style.width = '200px';

        if (nem == "Nő" && Szolg == "Divatfotózás") {
            kep.src = "kepek/1.jpg";
            kep.alt = 'Női modell';
        } else if (nem == "Nő" && Szolg == "Portréfotózás") {
            kep.src = "kepek/2.jpg";
            kep.alt = 'Női modell';
        } else if (nem == "Nő" && Szolg == "Katalógusfotózás") {
            kep.src = "kepek/3.jpg";
            kep.alt = 'Női modell';
        } else if (nem == "Nő" && Szolg == "Kifutómodellkedés") {
            kep.src = "kepek/6.jpg";
            kep.alt = 'Női modell';
        } else if (nem == "Férfi" && (Szolg == "Portréfotózás" || Szolg == "Divatfotózás")) {
            kep.src = "kepek/4.jpg";
            kep.alt = 'Férfi modell';
        } else if (nem == "Férfi" && (Szolg == "Katalógusfotózás" || Szolg == "Kifutómodellkedés")) {
            kep.src = "kepek/5.jpg";
            kep.alt = 'Férfi modell';
        }

        // Új p elem létrehozása és a kép hozzáadása
        pKep = document.createElement('p');
        pKep.appendChild(kep);
    }

    // Új p elem létrehozása és a szöveg hozzáadása
    let p = document.createElement('p');
    p.appendChild(pSzoveg);

    // Hozzáadás az article-hez
    let article = document.querySelector('article.arlista');
    article.appendChild(p);
    
    if (pKep) {
        article.appendChild(pKep);
    }
}
