//INTRODUÇÃO A ARRAYS

//primeira declaração de valores

// let nota1 = 10
// let nota2 = 9
// let nota3 = 8
// let nota4 = 7

//primeira declaração de média
// let media = (nota1 + nota2 + nota3 + nota4)/4


const notas = [10, 9, 8, 7]

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)

// INTRODUÇÃO AO MÉTODO PUSH

notas.push(6) // empurra o argumento para dentro do array
console.log(notas)

media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length

console.log(media)

// INTRODUÇÃO AO MÉTODO POP

notas.pop() //excluí o último elemento do array; pop não aceita parametro

console.log(notas)

media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)

// INTRODUÇÃO AO MÉTODO CONCAT

const alfabeto = ['a', 'b', 'c', 'd']
const numeros = [1, 2, 3, 4]
const alfanumerico = alfabeto.concat(numeros) // junta dois arrays passados como parametro

console.log(alfabeto)
console.log(numeros)
console.log(alfanumerico)

// INTRODUÇÃO AO MÉTODO FILTER

// const alfabeto = ['a', 'b', 'c', 'd']
const letraA = alfabeto.filter( letra => (letra == 'a')) // filtra todos os elementos do array

console.log(letraA)

// INTRODUÇÃO AO MÉTODO FIND

// const numeros = [1, 2, 3, 4]
const maiorQue2 = numeros.find( element => (element>2)) // filtra apenas o primeiro elemento que satisfazer a função

console.log(maiorQue2)



// INTRODUÇÃO AO MÉTODO SHIFT

// const numeros = [1, 2, 3, 4]

// const alfabeto = ['a', 'b', 'c', 'd']
numeros.shift()// retira o primeiro elemento do array
alfabeto.shift()

console.log(numeros)
console.log(alfabeto)

// INTRODUÇÃO AO MÉTODO UNSHIFT

// const numeros = [1, 2, 3, 4]
// const alfabeto = ['a', 'b', 'c', 'd']

numeros.unshift(13)// adiciona na primeira posição e acaba trocando o índice de todos os elementos.
alfabeto.unshift('l')

console.log(numeros)
console.log(alfabeto)

// INTRODUÇÃO AO MÉTODO REVERSE

// const numeros = [1, 2, 3, 4]
// const alfabeto = ['a', 'b', 'c', 'd']

numeros.reverse()//Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
alfabeto.reverse()

console.log(numeros)
console.log(alfabeto)

