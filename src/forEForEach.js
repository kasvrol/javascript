const notas = [10, 10, 9, 9]

let somaDasNotas = 0

for (let index = 0; index < notas.length; index++) {
    somaDasNotas += notas[index];
    
}


let mediaComFor =somaDasNotas/notas.length

console.log(mediaComFor)

//usando forEach

let somaDasNotas2 = 0

notas.forEach( nota => {
    somaDasNotas2 += nota
})

let mediaComForEach =somaDasNotas2/notas.length

console.log(mediaComForEach)