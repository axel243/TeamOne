var array;


class WoordMetDefinitie {
  constructor(woord, definitie){
    this.woord = woord;
    this.definitie = definitie;
  }
}

function woordOpslaan(){
  
  if (document.getElementById('woord').value == "") {
    var woordAlert = document.getElementById('woordToegevoegdAlert')
    woordAlert.innerHTML = 'Het woord veld mag niet leeg zijn!';
    woordAlert.style.color = '#eb4034';
  }else if (document.getElementById('definitie').value == "") {
    var definitieAlert = document.getElementById('woordToegevoegdAlert')
    definitieAlert.innerHTML = 'Het definitie veld mag niet leeg zijn!';
    definitieAlert.style.color = '#eb4034';
  }else{
  var woord = document.getElementById("woord").value;
  var definitie = document.getElementById("definitie").value;
  var woordDefinitie = new WoordMetDefinitie(woord, definitie);
  array.push(woordDefinitie);
  //  console.log(array);
  localStorage.setItem("Key",JSON.stringify(array));
  console.log(localStorage.getItem("Key"));
  document.getElementById('woord').value = '';
  document.getElementById('definitie').value = '';
  var succes = document.getElementById('woordToegevoegdAlert');
  succes.innerHTML = 'Het woord is succesvol toegevoegd!';
  succes.style.color = '#23ba30';
}
 
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

