// let age=prompt("How old are you");
// age=parseInt(age);//
// age +=1;
// console.log( typeof age);

// let x='pizaa';
// let y='pizaa';
// let z='pizaa';

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x, typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);


const PI=3.14159;
let raduis;
let circuference;

// raduis=prompt("Enter Your Raduis");
// raduis=parseInt(raduis);

//circuference=2 * PI * raduis;
// console.log("The raduis is: " + circuference);

document.getElementById('mysubmit').onclick=function(){
    raduis=document.getElementById('mytext').value;
   raduis=parseInt(raduis);
    
circuference=2 * PI * raduis;
document.getElementById('myh3').textContent=circuference+"cm";
}

//console.log("4" !== "4")

// let userAge = prompt("Enter your age:");
// userAge=parseInt(userAge);
// if (userAge != 18) {
//     console.log("You are not 18 years old.");
// } else {
//     console.log("Welcome!"); /// jab ap sarif 20 year ka honga tab condition kam karahi'

// }


// let enteredPined=prompt("Enter your 4-digit PIN");
// enteredPined=parseInt(enteredPined);
// if(enteredPined !== 1234){
//     console.log("In corret PIN! please try again");
    
// }else{
//     console.log("Access Generated");
    
// }

console.log(5==8); ///false
console.log((5==5)); //true



console.log(5===6);  //false basically check type and value both
console.log("6"==="6"); //true
console.log("6"===6); //false
console.log(6===6); //true

console.log(55 != 65); //true  bs equal nai hona chaiyaaa.....
console.log(5 != 5); //false


console.log(5 !== 5);   //false
console.log("5" !== "5");  //false

console.log("5" !== 6); // true
console.log("6" !== "9");  // true // !== value same ho but data type not matter
console.log("1" !== 1);  // true


console.log( 3 < 1);  //false
console.log( 1 < 3);  //true


console.log(8> 3); //true
console.log(3 > 9); // faLSE


console.log(8 >= 4);  // true
console.log( 2 >=2);  // true
console.log(3 >= 9);  //false



console.log(2 <= 6); //true
console.log( 2 <= 2); //true
console.log(19 <= 18); //falsegv
































