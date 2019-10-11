var array = [];


class WoordMetDefinitie {
  constructor(woord, definitie){
    this.woord = woord;
    this.definitie = definitie;
  }
}

function woordOpslaan(){
  var woord = document.getElementById("woord").value;
  var definitie = document.getElementById("definitie").value;
  var woordDefinitie = new WoordMetDefinitie(woord, definitie);
  var woordJSON = JSON.stringify(woordDefinitie);
  array.push(woordDefinitie);
  console.log(array);
  localStorage.setItem("Key",array);
}


