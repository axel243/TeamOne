var woordJSON = localStorage.getItem("Key");
var woordEnDefinities = JSON.parse(woordJSON);

function definitieEnWoord(){
    
    var arrayAantallen = Array.from(Array(woordEnDefinities.length).keys());
    console.log(arrayAantallen);


    for (var x = 0; x < 4; x++) {
        var random = Math.floor(Math.random() * arrayAantallen.length);
        console.log(woordEnDefinities[arrayAantallen[random]].woord);
        document.getElementById("woord" + (x+1)).innerHTML = woordEnDefinities[arrayAantallen[random]].woord;
        arrayAantallen.splice(random, 1);

        // console.log(x, random, arrayAantallen);
    }

 }




