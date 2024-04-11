let carta;
let conta1;
let conta2;
let resu;
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do desafio!';

function verificar(){
    console.log ('O botão foi apertado');
}

function verificarAmor() {
    alert ('Eu amo JS!!<3');
}

function verificarCarta() {
  carta = prompt('Diga uma cidade do Brasil');
  alert (`Eu estive na cidade ${carta} e lembrei de você`);  
}

function verificarConta() {
    conta1 = parseInt(prompt('Digite um número'));
    conta2 = parseInt(prompt('Digite um segundo número'));
    resu = conta1+conta2;
    alert (`${conta1}+${conta2}=${resu}`);
    
}

