//dividindo um array através do método slice
const nome = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']


// salaA pega a primeira parte do array divido, pois está indicando a posição 0 - que é a primeira pela lógica de casas do array.
const salaA = nome.slice(0, nome.length/2)

// salaB pega a segunda parte do array divido
const salaB = nome.slice( nome.length/2)

console.log(salaA)
console.log(salaB)

//removendo 2 elementos do array a partir da posição 1 (segunda posição) e acrescentando um elemento ('Rodrigo) através do método splice
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo']

listaDeChamada.splice(1, 2, 'Rodrigo')

console.log(listaDeChamada)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)//[ '🐋', '🐠', '🐙', '🐟' ]