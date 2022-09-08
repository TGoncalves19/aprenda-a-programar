//É número primo?
const numero = 1500450271

    i = 2 
while (numero % i != 0)
    i++ 

if (numero == i) 
    console.log(`Sim, o número ${numero} é primo.`)
else
    console.log(`Não, o número ${numero} não é primo.`)