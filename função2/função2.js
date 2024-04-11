let num = parseInt(prompt('Digite um número inteiro para ser fatorado'));

function fatoracao (pnum) {
 let numero = 1
 for (let i = pnum; i>1; i--){
    numero *= i;
 }
 return numero
}

console.log (fatoracao(num));
