$("btn+").on("click", calcola("+"));
$("btn-").on("click", calcola("-"));
$("btn/").on("click", calcola("/"));
$("btn*").on("click", calcola("*"));

function calcola(segno){
    var n1 =parseInt($("#addendo1").value());
    var n2 =parseInt($("#addendo2").value());
    var risultato;

    switch(segno){
        case "+" :
            risultato=n1+n2;
            break;
        case "-" :
            risultato=n1-n2;
            break;
        case "/" :
            risultato=n1/n2;
            break;
        case "*" :
            risultato=n1*n2;
            break;
    }
    $("#span1").html(risultato);
}