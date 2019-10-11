var array;


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
  array.push(woordDefinitie);
  //  console.log(array);
  localStorage.setItem("Key",JSON.stringify(array));
  console.log(localStorage.getItem("Key"));
  document.getElementById('woord').value = '';
  document.getElementById('definitie').value = '';
}

var key = localStorage.getItem("Key")

function checkarray() {
  if ( key ) {
    console.log("yes");
    console.log(key);
    console.log(JSON.parse(key));
    array = JSON.parse(key);
  }
  else {
    array = [];
    console.log("no");
  }
}

checkarray()

