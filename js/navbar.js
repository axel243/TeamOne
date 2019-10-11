


// $(document).ready(function(){
//     $("#navbars").load("/navbar.html");
// });

$(Document).ready(function () {
    var string = '<navid="navigatie"><ul><li><!--linkone--><a href="index.html">Startgame</a></li><li><!--linktwo--><a href="#inputwoord.html">Inputwoord</a></li><li><!--linkthree--><a href="hetSpel.html">Woordenlijst</a></li><li><!--linkfour--><a href="#aboutUs">Aboutus</a></li></ul></nav>'
    $("#navbars").html(string);
});