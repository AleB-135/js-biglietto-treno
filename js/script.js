// RACCOLTA DATI

const kilometersStr = prompt("Quanti chilometri vuoi percorrere?")
const ageStr = prompt("Quanti anni hai?")
console.log(kilometersStr, ageStr);

// BONUS
const kilometers = parseInt(kilometersStr);
const age = parseInt(ageStr);
console.log(kilometers,age)
// FINE BONUS


const ticketPrice = (0.21 * kilometers);
console.log(ticketPrice);


// ESECUZIONE LOGICA

let discount = 0;
if(age < 18) {
     discount = 20;    
} else if (age > 65) { 
     discount = 40;
}

console.log(discount);


// OUTPUT

const finalPrice = ticketPrice - (ticketPrice * discount / 100);
console.log(finalPrice);


const message = `Il prezzo base è €${ticketPrice.toFixed(2)}. Dato che il passeggero ha ${age} anni, ha diritto ad uno sconto del ${discount}%. Il prezzo finale, quindi, è €${finalPrice.toFixed(2)}`;
alert(message);