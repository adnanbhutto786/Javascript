// var age =16;
// if(age >=18){
//     console.log("You are elgible for vote.");   
// }else{
//     console.log("Go for Home");   
// }


// let age=21;
// if(age >= 22){
//     console.log("go for your market");
// }else{
//     console.log("go for your school");
    
// }

let age=23;
if(age <= 22){
    console.log("go for your market");
}else{
    console.log("go for your school");
                                          //condintuio false age is grater
}


// let correctAnswer="Today friday";
// let userAnswer=prompt("Enter your today day:");
// if(userAnswer === correctAnswer){
//     console.log("You are right.");
// }else{
//     console.log("Yo are not right.");
    
// }

// let a,b,sum;
// a=prompt("Enter the value of a:")
// a=parseInt(a);
// b=prompt("Enter the value of a:")
// b=parseInt(b);
// sum=a+b;

// if( sum >= 10){
//     console.log("You are master");
    
// }else{
//     console.log("The sum of "+sum);
    
// }

// var num=prompt("Enter Your number");
// num=parseInt(num);
// if(num % 2 === 0){
//     console.log("Even "+num);
  
// } else{
//     console.log("odd "+num);
    
// }

// var password="Admin123";
// var userPassword=prompt("Enter your password");
// if(userPassword === password){
//     console.log("Login Id");
    
// }else{
//     console.log("Rest the password");
    
// }


// var roomTempearture=prompt("Enter your temperature")
// roomTempearture=parseFloat(roomTempearture);
// if(roomTempearture < 20){
//     console.log("Cold Weather");
    

// }else if(roomTempearture >= 20 && roomTempearture <= 30 ){
//     console.log("Normal Weather");
    
// }else{
//     console.log("Hot weather");
    
// }

// var balance=1000;
// var withdrawAmount=prompt("Enter the amount");
// withdrawAmount=parseInt(withdrawAmount);
// if(withdrawAmount <= balance){
//     console.log("Transaction Succesfully! New balance: "+(balance-withdrawAmount) );
    
// }else {
//     console.log("Recharge for account");
    
// }


// let a=9;
// let b="10";


// if( a !== b ){
//     console.log("a and b are not equal...");
    
// } else{
//     console.log("a and b are equal");
//     /////////// yah condition tab work karagi aur true hogi jab datatype be change ho dono ki aur value be 
//     // value aur datatype same hona par condition false hojayaa giii..
// }


let correctUsername="admin";
let correctPassword="1234";

let enteredUsername=prompt("Enter the Username:");
let enteredPassword=prompt("Enter the password:");
if (enteredUsername !== correctUsername || enteredPassword !== correctPassword){
    console.log("Password Wrong! try again");
    
}else{
    console.log("Login Successfully!");
    
}





