document.getElementById("btn").addEventListener("click",btnfunc)
function btnfunc(){
    let x=prompt("what is your name ?")
    alert("welcome "+x);
    document.getElementById("box").style.backgroundColor="red";
}