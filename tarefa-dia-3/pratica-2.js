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

//Usando 'const'
//const multiplicador = 9
//let i = 1
//while (1 <= 10){
    //const resultado = i * multiplicador
    //const valorExibido = `${multiplicador} * ${i} = ${resultado}`
    //console.log (valorExibido)
//}