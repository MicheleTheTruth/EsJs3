if(typeof operations_array === "undefined"){
  var operations_array = localStorage.getItem("array");
  if(operations_array !== null){ 
  operations_array.forEach(function(item){
    $("#tabella").append(item)
  }); //il forEach è un funzione che si applica ad un array il quale esegue una funzione per ogni elemento dell'array
  }
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

    //var operations_array = localStorage.getItem("array");
    //if(operations_array === null){
    //  operations_array = [];
    //}
    operations_array.push(string);
    //operations_array = ["tizio", "caio", "sempronio"];
    //operations_array.push("pluto");//aggiunge elemento all'array
    //operations_array.pop(1)// restituisce elemento alla posizione specificata

    //localStorage.setItem("array", operations_array);
    //var operations_array = localStorage.getItem("array");

    $("#tabella").append(line);

    $("#"+contS).click(function(){$("#"+contS).remove();});
    cont++;
  }