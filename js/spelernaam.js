function spelernaam(){
    var speler = localStorage.getItem("deSpelers");
     var gangster = JSON.parse(speler);
     console.log(gangster.naam); 
     var welkomstdiv = document.getElementById("welkomsttekst");
     console.log(welkomstdiv);
     welkomstdiv.innerHTML = "Hoi, en welkom bij dit toffe spel " + gangster.naam;

}