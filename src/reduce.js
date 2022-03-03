const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala (notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => 
        atual + acumulador, 0)
        
    return somaDasNotas/notasDaSala.length
}

console.log( `Média da sala de Javascript ${mediaSala(salaJS)}` )

console.log( `Média da sala de Java ${mediaSala(salaJava)}` )

console.log( `Média da sala de Python ${mediaSala(salaPython)}` )

//reduce necessita ter 2 parametros

//parametro 'atual' passa por todos os valores do array

//parametro 'acumulador' começa com zero e soma sempre ao atual, assim acumula o valor que o parametro 'atual' vai assumindo e resultando na soma de todos os numeros do array