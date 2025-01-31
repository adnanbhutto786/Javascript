// var marks=prompt("Enter your marks");
// marks=parseInt(marks);
// if(marks >=80){
//     console.log("A++ grade");
    
// }else if(marks >=60){
//     console.log("B grade");
    
// }else{
//     console.log("You are Fail");
    
// }

// var age=prompt("Enter Your age:");
// age=parseInt(age);
// if( age < 12){
//     console.log("Small ticket");
    
// }else if(age <=60){
//     console.log("Meduim ticket");
    
// }else{
//     console.log("Senior level ticket");
    
// }


// var age=prompt("Enter your age");
// age=parseInt(age);

// var hasId=prompt("Do you have id card ? (yes/no)");

// if(age >= 18 && hasId==="yes"){
//     console.log("You are eligible for a driving license.");
    
// }else{
//     console.log("You are not eligible for a driving license.");
    
// }


// let day=prompt("Enter the day");
// if(day === "saturday" || day === "sunday"){
//     console.log("It's Weekend");
    
// }else {
//     console.log("Its weekday");
    
// }

///Nested statment if elseee,,,,

// var age =prompt("Enter your age");
// age=parseInt(age);

// if(age >= 18){
//     var hasId=prompt("Do you have id card ? (yes/no)");
//     if(hasId === "yes"){
//         console.log("You are apply for driving lisence");
        
//     }else{
//         console.log("You need an ID card to apply");
        
//     }
// }else{
//     console.log("You are young age soo bara hokar ajao");
    
// }


// var username=prompt("Enter your username");
// if(username === "admin"){
//     var password=prompt("Enter your password");
//     if(password === "admin123"){
//         console.log("Welcome Admin");
        
//     }else{
//         console.log("Incorrect password");
        
//     }

// }else{
//     console.log("unknow user");
    
// }

// var PIN = prompt("Enter Your 4 Digit PIN code");
// if(PIN === '1234'){
//     var amount=prompt("Enter your amount");
//     if(amount <= 5000){
//         console.log("Transtaion succesfully)");
        

//     }else{
//         console.log("Insufficient balance");
        
//     }
// }else{
//     console.log("In correct PIN Code");
    
// }


// let a,b,c,d,obtain_marks,total_marks=400,percentage,grade,attandance;
// a=prompt("Enter the marks of math");
// a=parseFloat(a);
// b=prompt("Enter the marks of Eng");
// b=parseFloat(b);
// c=prompt("Enter the marks of Science");
// c=parseFloat(c);
// d=prompt("Enter the marks of Pst");
// d=parseFloat(d);
// attandance=prompt("Enter your attandance",75)
// attandance=parseFloat(attandance)
// obtain_marks=a+b+c+d;
// total_marks=400;
// percentage=obtain_marks/total_marks*100;
// console.log("percentage is: "+percentage);

// console.log("Percentage: " + percentage + "%");
// console.log("Attandance: " + attandance + "%");


// if(percentage >=90 && attandance >=75){
//     grade="A++ (Excellent)";

// }else if(percentage >=80 && attandance >=75){
//     grade="A (Very Good)";
// }else if(percentage >=70 && attandance >=75){
//     grade="B (Good)";
// }else if(percentage >=60 && attandance >=75){
//     grade="C (Satisfactory)";
// }else if(percentage >=50 && attandance >=75){
//     grade="D (Pass)"
// }else if(percentage < 50 && attandance >=75){
//     grade="F (Fail)";
// }else{
//     grade="Not Eligible (Low attandance)"
// }

// console.log("Grade "+grade);



//Student report card system..
// name, rollno , attandance percentage..

let name=prompt("Enter your name");
let rollno=prompt("Enter your rollmo");
let attandance=prompt("Enter your attandance percenntage");
attandance=parseFloat(attandance);

let math=parseFloat(prompt("Enter the Marks math"));
let Science=parseFloat(prompt("Enter the Marks science"));
let urdu=parseFloat(prompt("Enter the Marks urdu"));
let pst=parseFloat(prompt("Enter the Marks pst"));

let total_marks=400;
let obtain_marks=math+Science+urdu+pst;
let percenntage=obtain_marks/total_marks*100;
let grade;
if(attandance >=75){
    if(percenntage >=90){
        grade="A++ Excellent";
    }else if(percenntage >=80){
        grade="A grade (Very Good)";
    }else if(percenntage >=70){
        grade="B grade (Good";
    }else if(percenntage >=60){
        grade="C grade (Promt)"
    }else if(percenntage >= 50){
        grade="D grade (Pass)";
    }else{
        grade="F (fail)";
    }
}else{
    grade="Not Eligible low attandance"
}



console.log("Student report card system");

console.log("Name: " + name);
console.log("rollno: "+rollno);
console.log("Attandance percentage: " + attandance+ "%");
console.log("Total Marks: "+total_marks);
console.log("Obtain Marks: " + obtain_marks );
console.log("percentage: " + percenntage);
console.log("Grade: " + grade);






