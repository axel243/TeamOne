var woordJSON = localStorage.getItem("Key");
var woordEnDefinities = JSON.parse(woordJSON);

function definitieEnWoord(){
    
    var arrayAantallen = Array.from(Array(woordEnDefinities.length).keys());
    // console.log(arrayAantallen);
    var woorden = [];
    var definities = [];

    for (var x = 0; x < 4; x++) {
        var random = Math.floor(Math.random() * arrayAantallen.length);
        definities.push(woordEnDefinities[arrayAantallen[random]].definitie);
        woorden.push(woordEnDefinities[arrayAantallen[random]].woorden);
        document.getElementById("woord" + (x+1)).innerHTML = woordEnDefinities[arrayAantallen[random]].woord;
        arrayAantallen.splice(random, 1);

        // console.log(x, random, arrayAantallen);
    }
    var random = Math.floor(Math.random() * definities.length);
    // console.log(woorden);
    // console.log(definities);
    console.log(random);
    document.getElementById("deDefinitie").innerHTML = definities[random];
 }




