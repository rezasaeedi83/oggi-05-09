/*scrivere una funzione che prende in ingresso un array di numeri e ritorna un array che alla posizione 0 
ha il numero piu' piccolo presente nell'array, 
e alla posizione 1 il numero piu' grande presente nell'array */


function trovaMinMax(array) {
    if (array.length === 0) {
      return []; // Restituisci un array vuoto se l'input è vuoto
    }
  
    let minimo = array[0]; // Inizializziamo il minimo con il primo elemento
    let massimo = array[0]; // Inizializziamo il massimo con il primo elemento
  
    // Iteriamo attraverso l'array per trovare il minimo e il massimo
    for (let i = 1; i < array.length; i++) {
      let numeroCorrente = array[i];
      
      if (numeroCorrente < minimo) {
        minimo = numeroCorrente; // Aggiorniamo il minimo se troviamo un numero più piccolo
      }
  
      if (numeroCorrente > massimo) {
        massimo = numeroCorrente; // Aggiorniamo il massimo se troviamo un numero più grande
      }
    }
  
    return [minimo, massimo]; // Restituiamo un array contenente il minimo e il massimo
  }
  
  // Esempio d'uso:
  let arrayDiNumeri = [3, 1, 7, 9, 2, 5];
  let risultato = trovaMinMax(arrayDiNumeri);
  
  console.log(risultato); // Stampa: [1, 9]
  