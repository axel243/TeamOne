var array = [];


class WoordMetDefinitie {
  constructor(woord, definitie){
    this.woord = woord;
    this.definitie = definitie;
  }
}

function woordOpslaan(){
  console.log("test2");
  var woord = document.getElementById("woord").value;
  var definitie = document.getElementById("definitie").value;
  var woordDefinitie = new WoordMetDefinitie(woord, definitie);
  var woordJSON = JSON.stringify(woordDefinitie);
  console.log(woordDefinitie);
  localStorage.setItem("Key",woordJSON);
  
  window.location.replace("inputwoord.html")
}

function voegToeAanArray(WoordMetDefinitie){
array.push(WoordMetDefinitie);
}

console.log("test");