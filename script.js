// SOLUCIÓN 1 (A partir del extracto de campus)
// function findLongestWord(text) {
//     const words = text.split(' ');

//     let longestWord = '';

//     // Recorre el arreglo de palabras
//     for(let i = 0; i < words.length; i++){
//         // Compara la longitud de la palabra actual con la más larga
//         if(words[i].length > longestWord.length){
//             // Actualiza la palabra más larga
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// SOLUCIÓN 2 (Utilizando apuntadores)
function findLongestWord(text){
    let start, end = 0;
    let currentWord = '';
    let longestWord = '';

    // Recorre el texto por caracter
    for (end; end < text.length; end++){
        // Verifica si el caracter actual es un espacio o se trata del último caracter del texto
        if(text[end] === ' ' || end === text.length - 1){
            //? Se extrae la palabra actual a partir del valor de los dos apuntadores:
            // Si el caracter es un espacio, se utiliza 'end' como índice final para excluir el espacio.
            // Si es el último caracter del texto, se utiliza 'end + 1' como índice final para incluir el caracter actual.
            currentWord = text.substring(start, text[end] === ' ' ? end : end + 1);
            if(currentWord.length > longestWord.length){
                
                longestWord = currentWord;  // Actualiza la palabra más larga
            }
            start = end + 1;  // Mueve el apuntador de inicio al siguiente caracter
        }
    }
    return longestWord;
}

const texto = "El cambio climático se ha convertido en uno de los mayores desafíos del siglo XXI";
console.log(findLongestWord(texto));

const otroTexto = "JavaScript es un lenguaje de programación increíble para aprender";
console.log(findLongestWord(otroTexto));


