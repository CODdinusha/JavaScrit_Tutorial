// let employee = {
//     name:"Dilhari",
//     address:"Kegalle",
//     age:27,
//     isAlive:false,
//     getmsg: function(){
//         alert(this.name)
//     }
// }
// employee.name = 'Nimeshika';
// console.log(employee.getmsg())

// let employee = {
//     name:"Dilhari",
//     address:"Kegalle",
//     'first name':"Dinusha",
//     age:27,
//     isAlive:false,
//     getmsg: function(p1){
//         alert(p1 +" "+this.address)
//     }
// }
// console.log(employee.getmsg('Maduwanthi'))
// console.log(employee['first name'])

// for(let key in employee){
//     console.log(key +"  :"+ employee[key]);
    
// }

// let employee1 = {
//     Fname:"Dinusha",
//     Lname:"Madhuranga",
//     age:27,
//     'first name' : 'Afff',
//     location:"Kegalle",
//     IsAllive:true,
//     getMsg: function() {
//         alert(this.Fname)
//     }
// }
// console.log(employee1['first name' ]);
// for(let key in employee1) {
//     console.log(key +" : "+employee1[key])
// }

//Nullish coalescing
const sometext = 'Hi'; //"",null,undefined get the Hi, How Are You 
const a = sometext || 'Hi , How Are You'
console.log(a)

const sometext1 =0;
const b = sometext1 ?? 'hello'
console.log(b);


