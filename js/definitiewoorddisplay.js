var woordJSON = localStorage.getItem("Key");
var woordEnDefinities = JSON.parse(woordJSON);
var arrayAantallen = Array.from(Array(woordEnDefinities.length).keys());
console.log(arrayAantallen);

// console.log(array);
console.log(Math.floor(Math.random() * woordEnDefinities.length));



function definitieEnWoord(){
    var deVraag = woordEnDefinities[Math.floor(Math.random() * woordEnDefinities.length)];
    var randomWoord1 = woordEnDefinities[Math.floor(Math.random() * woordEnDefinities.length)].woord;
    var randomWoord2 = woordEnDefinities[Math.floor(Math.random() * woordEnDefinities.length)].woord;
    var randomWoord3 = woordEnDefinities[Math.floor(Math.random() * woordEnDefinities.length)].woord;

    document.getElementById("deDefinitie").innerHTML = deVraag.definitie;
    document.getElementById("woord1").innerHTML = deVraag.woord;
    document.getElementById("woord2").innerHTML = randomWoord1;
    document.getElementById("woord3").innerHTML = randomWoord2;
    document.getElementById("woord4").innerHTML = randomWoord3;

 }