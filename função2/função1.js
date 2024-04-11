let peso = parseFloat(prompt('Digite seu peso atual em kg'));
let altura = parseFloat(prompt('Digtie sua altura atual em metros'));
let media

function imc (ppeso,paltura) {
    return ppeso/(paltura*paltura);
}

media = imc(peso, altura);
console.log (`Seu IMC é: ${media.toFixed(2)}`);