// método concat - une a variavel de parametro com todas as variaveis colocadas como argumento
const salaDePython = ['Melissa A', "Juliana A", "Leonardo A"]
const salaDeJava = ['Melissa B', "Juliana B", "Leonardo B"]
const salaDeJavaScript = ['Melissa C', "Juliana C", "Leonardo C"]
const salaDeC = ['Melissa D', "Juliana D", "Leonardo D"]


const salasUnidas1 = salaDePython.concat(salaDeJava)
/**
 * ['Melissa A', 'Juliana A', 'Leonardo A', 'Melissa B', 'Juliana B']
 */


const salasUnidas2 = salaDePython.concat(salaDeJava, salaDeJavaScript)
/**
 * ['Melissa A', 'Juliana A', 'Leonardo A', 'Melissa B', 'Juliana B', 'Leonardo B', 'Melissa C',  'Juliana C']
 */


const salasUnidas3 = salaDePython.concat(salaDeJava, salaDeJavaScript, salaDeC)
/**
 * ['Melissa A', 'Juliana A', 'Leonardo A', 'Melissa B', 'Juliana B', 'Leonardo B', 'Melissa C',  'Juliana C', 'Leonardo C', 'Melissa D', 'Juliana D', 'Leonardo D']
 */