let button = document.getElementById("calculate")
let res = document.getElementById("result")
let interest;
let total;
let calculate = ()=>{
    let p = Number(document.getElementById("p").value)
    // console.log(p)
    let r=Number(document.getElementById("r").value)
    let t=Number(document.getElementById("t").value)
    // console.log(r)
    // console.log(t)
    let duration = document.getElementById("v").value
    // console.log(duration)

    if(duration=="year"){
        interest = (p*t*r)/100;
    }
    else {
        interest = (p*t*r)/1200;
    }
    // console.log(interest)
    total = p + interest;
    // console.log(total)
    res.innerHTML = ` Total Interest - ${interest} <br>
    Total Amount - ${total}`
};
button.addEventListener("click" , calculate)
window.addEventListener("load",calculate)

