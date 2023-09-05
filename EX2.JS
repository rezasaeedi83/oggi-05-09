/*scrivere una funzione che prende in ingresso un array di stringhe a, 
la funzione deve ritornare una mappa dove ogni chiave corrisponde ad ogni stringa in a e il valore 
corrisponde alla lunghezza della stringa */


function lunghezzaStringhe(a) {
    let mappa = {}; // Inizializziamo una mappa vuota
  
    // Iteriamo attraverso l'array di stringhe
    for (let i = 0; i < a.length; i++) {
      let stringa = a[i]; // Otteniamo la stringa corrente
      let lunghezza = stringa.length; // Calcoliamo la lunghezza della stringa
      mappa[stringa] = lunghezza; // Aggiungiamo la coppia chiave-valore alla mappa
    }
  
    return mappa;
  }
  
  // Esempio d'uso:
  let arrayDiStringhe = ["cane", "gatto", "elefante"];
  let risultato = lunghezzaStringhe(arrayDiStringhe);
  
  console.log(risultato);
  // Stampa: { "cane": 4, "gatto": 5, "elefante": 8 }
  