﻿

// getting the data

//console.log(JSON.parse(localStorage.getItem("Key")));
console.log(localStorage.getItem("Key"));

// derde pagina met waarden die worden uitgelezen

var array = JSON.parse(localStorage.getItem("Key"));

function generate_table() {

    var table = '<table>';
    for (var x = 0; x < array.length; x++) {
        table += '<tr><td>' + array[x].woord + '</td><td>'
            + array[x].definitie + '</td></tr>';
        
    }
    table += '</table>';
    console.log(table);

    $('#table').html(table);
}

$(Document).ready(function () {
    generate_table();
});
