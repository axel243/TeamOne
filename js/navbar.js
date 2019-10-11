


// $(document).ready(function(){
//     $("#navbars").load("/navbar.html");
// });

$(Document).ready(function () {
    var string = '<navid="navigatie"><ul><li><!--linkone--><ahref="index.html">Startgame</a></li><li><!--linktwo--><ahref="#inputwoord.html">Inputwoord</a></li><li><!--linkthree--><ahref="hetSpel.html">Woordenlijst</a></li><li><!--linkfour--><ahref="#aboutUs">Aboutus</a></li></ul></nav>'
    $("#navbars").html(string);
});