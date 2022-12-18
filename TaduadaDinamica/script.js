var valorDigitado = document.querySelector('input#numeroDigitado')
const numeroFixo = document.querySelector('div#numeroFixo')
var converte = Number(valorDigitado.value)
var numb5 =  [0,1,2,3,4,5,6,7,8,9,10]



function calcular(){
    var convertendo = parseInt(valorDigitado.value);
    
    document.querySelector('a#numeroFixo0').innerHTML = `${convertendo} x ${numb5[0]} = ${(convertendo * numb5[0])}`
    document.querySelector('a#numeroFixo1').innerHTML = `${convertendo} x ${numb5[1]} = ${(convertendo * numb5[1])}`
    document.querySelector('a#numeroFixo2').innerHTML = `${convertendo} x ${numb5[2]} = ${(convertendo * numb5[2])}`
    document.querySelector('a#numeroFixo3').innerHTML = `${convertendo} x ${numb5[3]} = ${(convertendo * numb5[3])}`
    document.querySelector('a#numeroFixo4').innerHTML = `${convertendo} x ${numb5[4]} = ${(convertendo * numb5[4])}`
    document.querySelector('a#numeroFixo5').innerHTML = `${convertendo} x ${numb5[5]} = ${(convertendo * numb5[5])}`
    document.querySelector('a#numeroFixo6').innerHTML = `${convertendo} x ${numb5[6]} = ${(convertendo * numb5[6])}`
    document.querySelector('a#numeroFixo7').innerHTML = `${convertendo} x ${numb5[7]} = ${(convertendo * numb5[7])}`
    document.querySelector('a#numeroFixo8').innerHTML = `${convertendo} x ${numb5[8]} = ${(convertendo * numb5[8])}`
    document.querySelector('a#numeroFixo9').innerHTML = `${convertendo} x ${numb5[9]} = ${(convertendo * numb5[9])}`
    document.querySelector('a#numeroFixo10').innerHTML = `${convertendo} x ${numb5[10]} = ${(convertendo * numb5[10])}`
    
    
    /*
    for (var i=0; i <= numb5.length; i ++){
        document.getElementsByTagName('numeroFixo')[i].innerHTML = `${convertendo} x ${numb5[i]} = ${(convertendo * numb5[i])}`
    
      */
}

function saindo(){
    document.querySelector('a#numeroFixo').innerHTML = '?'
}

