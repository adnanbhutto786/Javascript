//Array Start chapter 15...

let students = ['Ali' , 'Ayesha' , 'Usman' , 'Umair Ali'];
console.log(students);

console.log(students[3]);  ///Array kaa specfic element accesss krna ho


//array me new value add krna kisi aur ki replace kr la ga postion..

students[3]='Zahir Alam';
console.log(students);

console.log(students.length);


// let numbers =[];
// numbers [0] =10;
// numbers [1] =20;
// numbers [2] =30;
// numbers [5] =40;
// console.log(numbers);

//To do list System in array

let tasks=["Complete Homework" , "Buy Geroceries" , "Go to Gym"];
console.log("Today Task:");
console.log("1. "+tasks[0]);
console.log("2. "+tasks[1]);
console.log("3. "+tasks[2]);


let movies = ["Avatar" , "Avengers Endgame" , "Avatar: A way of water", "Titanic"];
console.log(movies);
console.log(movies.length);


// let sports = ["Cricket", "Football", "Hockey"];
// console.log("My Favrioute Sports game:");
// console.log("1. "+ sports[0]);
// console.log("2. "+ sports[1]);
// console.log("3. "+ sports[2]);


// let sports =[];

// sports[0]=prompt("Enter your first favrioute Game");
// sports[1]=prompt("Enter your Second favrioute Game");
// sports[2]=prompt("Enter your third favrioute Game");
// sports[3]=prompt("Enter your fourth favrioute Game");
// console.log("Your favrioute sports game: ");
// console.log("1. "+sports[0]);
// console.log("2. "+sports[1]);
// console.log("3. "+sports[2]);
// console.log("4. "+sports[3]);



// array adding and removing elements in index..  chapter 16
// 4 methods add and remove elemnt
// push end me ak element add karta hai..
// pop end say ak element remove karta haii
// unshift start me ak element add karta hai
// shift start say ak element remove karta haii


// let fruties=["Apple" , "Banana"];
// fruties.push("Orange");
// console.log(fruties);   // orange index ,me add hojaya ga index 2 and overall length 3


// let fruties=["Apple" , "Banana" , "Egg"];
// fruties.pop();
// console.log(fruties);   last say ak remove kregaa


// let colors=["Red", "Green","blue"];
// colors.unshift("Pink");
// console.log(colors); /// unshift yah start me add kregaa


// let colors=["Red", "Green","blue"];
// colors.shift();
// console.log(colors);



// let busMembers=["Arslan","Ahmed","Ayesha"];
// busMembers.push("Adnan");
// console.log(busMembers);

// busMembers.shift();
// console.log(busMembers);


//chapter 17// splice and slice function

//splice removing element
// let fruties=["Apple", "Banana", "Orange","Egg"]
// fruties.splice(1,2);
// console.log(fruties);  /// yehan apple aur egg reh jaya gi 1 aur 2 index remove hojaya gi


// splice inserting element
let colors=["Red","Green","pink"];
colors.splice(1,0,"black","Purple");
console.log(colors); /// yehan paa yahh  index 1 pa 2 values ko add krdegaa binaa kisi ko remove kiya



//slice array ka ak specfic partion ko extract karta haii..

let studentss=["Tayyaba","Sarah","Sana","Zulqernain"];
let selectedStudents=studentss.slice(1,3);
console.log(selectedStudents);






























