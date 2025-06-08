let Fname = 'Dinusha';
let Lname = 'Madhuranga';
let age = 25;

console.log(`${Fname} ${Lname} is ${age} years old`);

let domElement = `<h1 style="color:red;font-size:3rem">${Fname} ${Lname} ${age}</h1>`;
document.getElementById("result").innerHTML = domElement;

