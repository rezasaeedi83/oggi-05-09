/*scrivere una funzione che prende in ingresso due array a e b, la funzione deve ritornare un array che contenga 
gli elementi che sono solo in a e solo in b */

function differenzaArray(a, b) {
    let risultato = [];
  
    // Verifichiamo gli elementi di 'a' per la loro unicità
    for (let i = 0; i < a.length; i++) {
      let elemento = a[i];
      if (b.indexOf(elemento) === -1 && risultato.indexOf(elemento) === -1) {
        risultato.push(elemento);
      }
    }
  
    // Verifichiamo gli elementi di 'b' per la loro unicità
    for (let i = 0; i < b.length; i++) {
      let elemento = b[i];
      if (a.indexOf(elemento) === -1 && risultato.indexOf(elemento) === -1) {
        risultato.push(elemento);
      }
    }
  
    return risultato;
  }
  
  // Esempio d'uso:
  let arrayA = [1, 2, 3, 4, 5];
  let arrayB = [3, 4, 5, 6, 7];
  
  let risultato = differenzaArray(arrayA, arrayB);
  
  console.log(risultato); // Stampa: [1, 2, 6, 7]
  