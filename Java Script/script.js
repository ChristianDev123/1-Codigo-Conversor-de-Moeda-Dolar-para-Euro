function realizarConversão(){
  var numeroEscrito = document.querySelector("input#campoDeValor");
  var valorEmDolar = parseFloat(numeroEscrito.value);
  i = valorEmDolar * 0.73;
  var valorEmLibrasNaTela = document.querySelector("h2#mostrarNaTela");
  var html = "£ " + i.toFixed(2);
  valorEmLibrasNaTela.innerHTML= html   
    }

