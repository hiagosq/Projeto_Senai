let n1 = prompt('Digite o primeiro número');
let n2 = prompt('Digite o segundo número');
let n3 = prompt('Digite o terceiro número');
let media;

function Calcular(parN1,parN2,parN3) {
   return (parN1+parN2+parN3)/3
}
media = Calcular(n1,n2,n3);
alert (`A media dos números é: ${media}`);