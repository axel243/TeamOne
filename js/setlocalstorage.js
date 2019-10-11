class Speler{
    naam;
    score;
    goed;
    fout;
    streak;
    constructor(naam){
        this.naam = naam;
    }
}

function spelerMaken(){
    var naam = document.getElementById("ariekanarie").value;
    var speler = new Speler (naam);
    
    var spelerJSON = JSON.stringify(speler)
    console.log(speler.naam);
    localStorage.setItem("deSpelers", spelerJSON);
    
    window.location.replace("inputwoord.html")
}

