if(typeof last_operation === "undefined" || last_operation === null){
  $("#tabella").append(localStorage.getItem("operation"));
}

$("#btn1").click(function () {calcola("+");});
$("#btn2").click(function () {calcola("-");});
$("#btn3").click(function () {calcola("/");});
$("#btn4").click(function () {calcola("*");});

var cont=0;

  function calcola(segno) {
    var n1 = parseInt($("#num1").val());
    var n2 = parseInt($("#num2").val());
    var risultato;
  
    switch (segno) {
      case "+":
        risultato = n1 + n2;
        break;
      case "-":
        risultato = n1 - n2;
        break;
      case "/":
        risultato = n1 / n2;
        break;
      case "*":
        risultato = n1 * n2;
        break;
    }
    var contS=cont.toString();
    $("#span1").html(risultato);
    
    var string="<tr id="+contS+"><td>"+n1+"</td><td>"+segno+"</td><td>"+n2+"</td><td>=</td><td>"+risultato+"</td>"+"<td><button id="+contS+">Cancella</button></td></tr>";
    var line = $(string);
    localStorage.setItem("operation", string);
    var last_operation=localStorage.getItem("operation");

    $("#tabella").append(line);
    $("#"+contS).click(function(){$("#"+contS).remove();});
    cont++;
 } 