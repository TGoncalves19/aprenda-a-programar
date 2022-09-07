//Fazendo a tabuada de 9
let multiplicador = 9 //multiplicador
let n = 10 // multiplicando numero de 1 a n
let i = 1 // inicio do numero 

while(i <= n) {
    let resultado = multiplicador * i
    let textoDeExibicao = `${multiplicador} * ${i} = ${resultado}`
    console.log(textoDeExibicao)
    i++
}
