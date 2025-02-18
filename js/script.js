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

let discount;
if(age < 18) {
     console.log(ticketPrice * 20 / 100);    
} else if (age > 65) { 
     console.log(ticketPrice * 40 / 100);
} else {
     console.log(ticketPrice)
}

// OUTPUT
let finalPrice;
if(age < 18) {
     console.log(ticketPrice - ticketPrice * 20 / 100);
} else if (age > 65) { 
     console.log(ticketPrice - ticketPrice * 40 / 100);
} else {
     console.log(ticketPrice);
}
