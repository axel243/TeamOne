

// getting the data

//console.log(JSON.parse(localStorage.getItem("Key")));
console.log(localStorage.getItem("Key"));

// derde pagina met waarden die worden uitgelezen

rijennum = 10;
colomnum = 2;
woordcolom = 50;
defcolom = 200;

var array = JSON.parse(localStorage.getItem("Key"));

function generate_table() {

    var table = '<table>';
    for (var x = 0; x < array.length; x++) {
        table += '<tr><td>' + array[x].woord + '</td><td>' + array[x].definitie + '</td></tr>';
        
    }
    table += '</table>';
    console.log(table);

    $('#table').html(table);
}

generate_table();



// create a table

//var Container = document.createElement("table");
//var Woord = document.createElement("td");
//var Definitie = document.createElement("td");
//var Rijsamen = document.createElement("tr");

//Container.appendChild(Rijsamen.appendChild(Woord, Definitie));




