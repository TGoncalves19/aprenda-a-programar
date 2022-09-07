//Dados do cliente
let produtoA = {
    nome: "camisa", 
    valor: 100.00, 
    internacional: true
};

let produtoB = {
    nome: "perfume",
    valor: 200.00, 
    internacional: true
};

let produtoC = {
    nome: "sandália",
    valor: 120.00, 
    internacional: false
};

// Calculando os produtoA com impostos
if (produtoA.internacional == true) {
    let valorImpostos = produtoA.valor * 1.2
    console.log ("O produtoA é internacional")
    console.log (`R$ ${valorImpostos} reais`)
} else{
    let valorImpostos = produtoA * 1.12
    console.log ("O produtoA é nacional")
    console.log (valorImpostos)
}

// Calculando os produtoB com impostos
if (produtoB.internacional == true) {
    let valorImpostos = produtoB.valor * 1.2
    console.log ("O produtoB é internacional")
    console.log (`R$ ${valorImpostos} reais`)
} else{
    let valorImpostos = produtoB * 1.12
    console.log ("O produtoB é nacional")
    console.log (valorImpostos)
}

// Calculando os produtoC com impostos
if (produtoC.internacional == true) {
    let valorImpostos = produtoC.valor * 1.2
    console.log ("O produtoC é internacional")
    console.log (`R$ ${valorImpostos} reais`)
} else{
    let valorImpostos = produtoC.valor * 1.12
    console.log ("O produtoC é nacional")
    console.log (valorImpostos)
}