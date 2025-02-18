const kilometers = prompt("Quanti chilometri vuoi percorrere?")
const age = prompt("Quanti anni hai?")
console.log(kilometers, age);



const ticketPrice = (0.21 * kilometers);
console.log(ticketPrice);
 

let message;
if(age < 18) {
    console.log(ticketPrice * 20 / 100);    
} else if (age > 65) {
    console.log(ticketPrice * 40 / 100);
}
