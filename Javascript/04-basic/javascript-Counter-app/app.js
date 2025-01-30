const descrment=document.getElementById("Decreasebtn");
const incrment=document.getElementById("increasebtn");
const rest =document.getElementById("restbtn");
const countlabel=document.getElementById("countlabel");
let count=0;

descrment.onclick=function(){
    count--;
    countlabel.textContent=count;
}
incrment.onclick=function(){
    count++;
    countlabel.textContent=count;
}

rest.onclick=function(){
    count=0;
    countlabel.textContent=count;
}