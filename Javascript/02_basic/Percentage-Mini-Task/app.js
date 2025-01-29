// let firstName;
// let lastName;
// let email;

// document.getElementById('Submit-button').onclick = function () {
    
//     firstName=document.getElementById('first-name').value;
//     lastName=document.getElementById('last-name').value;
//     email=document.getElementById('email-id').value;


//     document.getElementById('first').textContent="Your First Name is "+firstName;
//     document.getElementById('second').textContent="Your Last Name is "+lastName;
//     document.getElementById('third').textContent="Your Email is "+email;


    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    
    
    let a,b,sum;
    document.getElementById('Submit-button').onclick=function(){
        a=parseFloat(document.getElementById('firstNumber').value);
        b=parseFloat(document.getElementById('secondNumber').value);

        sum=a+b;
        sub=a-b;
        mul=a*b;
        div=a/b;
        square=a**b;
     

        // document.getElementById('output').innerHTML='The Sum of two '+sum;

        // document.getElementById('output').innerHTML='The Sub of two '+sub;


    document.getElementById('output').innerHTML = `
   The sum of two num: ${sum} <br>
   The Sub of two num: ${sub} <br>
   The pro of two number: ${mul} <br>
   The div of two number: ${div} <br>
   The squareroot of number: ${square} 
    `;

    };