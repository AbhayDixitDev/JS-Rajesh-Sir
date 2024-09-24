document.getElementById("btn1").addEventListener("click",start);
document.getElementById("btn2").addEventListener("click",Stop);
document.getElementById("btn3").addEventListener("click",Clear);



let IntVal;
function Count(){
    let val=Number(document.getElementById("text").innerHTML);
    val=val+10;
    document.getElementById("text").innerHTML=val;
}



function start(){
   IntVal= setInterval(Count,10);
}

function Stop(){
    clearInterval(IntVal)
}
function Clear(){
    document.getElementById("text").innerHTML=0;
}