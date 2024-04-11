let raio = parseFloat(prompt('Digite o raio da sala'));

function perimetro(praio) {
    let peri = 2*3.14*raio;
    return peri;
}
let resu1 = perimetro(raio);

function area(araio) {
    let ar = 3.14*(araio*araio);
    return ar;
}
let resu = area(raio);

console.log (`A área da sala é ${resu.toFixed(2)} e o perímetro é ${resu1.toFixed(2)}`);