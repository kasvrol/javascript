//removendo 2 elementos do array a partir da posição 1 (segunda posição) e acrescentando um elemento ('Rodrigo) através do método splice
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo']

listaDeChamada.splice(1, 2, 'Rodrigo')

/*[ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Léo' ]*/


//ATIVIDADE (ALURA)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠') //[ '🐋', '🐠', '🐙', '🐬', '🦈' ]

//não removendo nenhum elemento do array e acrescentando um elemento (🐠) a partir da posição 1 (segunda posição) através do método splice


animaisDoAquario.splice(3,2,'🐟') //[ '🐋', '🐠', '🐙', '🐟' ]

//removendo 2 elementos do array a partir da posição 3 (quarta posição) e acrescentando um elemento (🐟) através do método splice