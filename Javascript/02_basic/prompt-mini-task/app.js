

let username;
let fathername;

document.getElementById('mySubmit').onclick= function(){
    username=document.getElementById("mytext").value;
    fathername=document.getElementById('myFatherText').value;

    document.getElementById('myh1').textContent="Hello "+username;
    document.getElementById('fath').textContent="Hello "+fathername;
}

