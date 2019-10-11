function spelernaam(){
    var speler = localStorage.getItem("deSpelers");
     var gangster = JSON.parse(speler);
     console.log(gangster);

}