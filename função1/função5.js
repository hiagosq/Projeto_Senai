let num1 = parseInt (prompt('Informe seu número'));
let num2 = parseInt (prompt('Informe seu número'));

function maior(pnum1,pnum2) {
    if (pnum1 > pnum2){
        return pnum1;
    }
    else {
        return pnum2;
    } 
}

media = maior(num1, num2);
alert(`O maior número é: ${media}`);