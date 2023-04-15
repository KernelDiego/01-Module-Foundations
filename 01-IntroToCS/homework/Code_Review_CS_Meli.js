function BinarioADecimal(num) {
    // tu codigo aca
  //            num[i] * 2 
    //1011 -> 1 * 2 ^ 0 + 1 * 2 ^ 1 + 0 * 2 ^ 2 + 1 * 2 ^ 3
    var suma = 0;
    var posicion = 0
    
    for(let i = num.length - 1; i >= 0; i--) {
        suma = suma + num[i] * 2 ** posicion
        console.log(posicion)
        posicion++
    
    }
    return suma
}

console.log(BinarioADecimal('1001'))

function DecimalABinario(num) {
    // tu codigo aca
    // 11 --> 11/2 -->5.5-->1
    //5/2 --> 2.5 --> 1
    //2 /2 --> 1 --> 0 
    //1 / 2 --> 0.5 --> 0
    //siempre agarramos el entero
    var resultado = ''
    while(num !== 0){
        resultado =   num % 2 +resultado
        num = Math.floor(num/2)
    }
    return resultado
}

console.log(DecimalABinario(14))