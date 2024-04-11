let largura = parseFloat(prompt('Digite a largura da sala'));
let altura = parseFloat(prompt('Digite a altura da sala'));

function perimetro(plargura,paltura) {
    let peri = 2*paltura + 2*plargura
    return peri
}
let resu1 = perimetro(altura, largura);

function area(aaltura, alargura) {
    let ar = aaltura*alargura
    return ar
}
let resu = area(altura, largura);

console.log (`A área da sala é ${resu} e o perímetro é ${resu1}`);