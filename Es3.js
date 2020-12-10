$("#btn1").click(function () {calcola("+");});
$("#btn2").click(function () {calcola("-");});
$("#btn3").click(function () {calcola("/");});
$("#btn4").click(function () {calcola("*");});

  function calcola(segno) {
    var n1 = parseInt($("#num1").val());
    var n2 = parseInt($("#num2").val());
    var risultato;
    var cont=1;
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
    $("#span1").html(risultato);
    $("#tabella").append("<tr id='riga'><td>"+n1+"</td><td>"+segno+"</td><td>"+n2+"</td><td>=</td><td>"+risultato+"</td>"+"<td><button id='antani'>Cancella</button></td></tr>");
    $("#antani").click(function(){$("#riga").remove();});
 } 