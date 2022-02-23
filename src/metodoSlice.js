//dividindo um array através do método slice
const nome = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// salaA pega a primeira parte do array divido, pois está indicando a posição 0 - que é a primeira pela lógica de casas do array.
const salaA = nome.slice(0, nome.length/2)

/**['João','Juliana','Ana','Caio','Lara','Marjorie', 'Guilherme', 'Aline','Fabiana', 'Andre'] */



// salaB pega a segunda parte do array divido
const salaB = nome.slice( nome.length/2)

/*[ 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']*/