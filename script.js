function btnclick(val){
    document.getElementById("calcdisplay").value+=val;
}
function btnclear(){
    document.getElementById("calcdisplay").value="";
}
function equalclick(){
    var text=document.getElementById("calcdisplay").value
    var result= eval(text)
    document.getElementById("calcdisplay").value=result
}