let raduis, Area ;
const PI=3.14159;

document.getElementById('mysubmit').onclick = function (){
    raduis=document.getElementById('myvalue').value;
    raduis=parseFloat(raduis)

    Area=PI * raduis * raduis;

    document.getElementById("myh3").textContent="The area of circel is "+Area;

}