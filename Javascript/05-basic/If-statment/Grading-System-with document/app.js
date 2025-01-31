document.getElementById("mySubmit").onclick=function(){
    let name=document.getElementById('name').value;
    let rollno=document.getElementById('rollNo').value;
    let attandance=parseFloat(document.getElementById("attandanceId").value);
    let math=parseFloat(document.getElementById("math").value);
    let eng=parseFloat(document.getElementById("eng").value);
    let science=parseFloat(document.getElementById("science").value);
    let pst=parseFloat(document.getElementById("pst").value);


    let totalMarks=400;
    let obtainMarks=math+eng+science+pst;
    let percentage=obtainMarks/totalMarks*100;
    let grade;

    if(attandance >= 75){
        if(percentage >=90){
            grade="A++ Grade (Excellent)";
        }else if(percentage >=80){
            grade="A Grade (Very Good)";
        }else if(percentage >=70){
            grade="B grade (Good)";
        }else if(percentage >= 60){
            grade="C Grade promt";
        }else if(percentage >= 50){
            grade="D grade (Pass)";
        }else{
            grade="F Fail"

        }
    }else{
        grade="Low attandance try again"
    }

document.getElementById("resultdiv").style.display="block";
document.getElementById("resultdiv").innerHTML=`
<h3> Student report card </h3>
<p><b>Name: </b> ${name}</p> 
<p><b>rollNo: </b> ${rollno}</p> 
<p><b>Attandance: </b> ${attandance}</p> 
<p><b>totalMarks: </b> ${totalMarks}</p> 
<p><b>ObtainMarks: </b> ${obtainMarks}</p> 
<p><b>Percentage: </b> ${percentage}</p> 
<p><b>Grade: </b> ${grade}</p> 
`;

}