document.getElementById("btnCal").addEventListener("click",calculate);

function calculate(){
    let eng=Number(document.getElementById("eng").value);
    let phy=Number(document.getElementById("phy").value);
    let math=Number(document.getElementById("math").value);
    let hindi=Number(document.getElementById("hindi").value);
    let chemistry=Number(document.getElementById("che").value);

    let totalmarks=eng+phy+math+hindi+chemistry;
    let percent=totalmarks/500*100;

    document.getElementById("total-marks").innerHTML="Total Marks:"+totalmarks;
    document.getElementById("percent").innerHTML="Percentage:"+percent;
}