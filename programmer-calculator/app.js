var number = document.getElementById("number-input").value;



function calculate() {
    var number = document.getElementById("number-input").value;
    console.log(number);
}

document.getElementById("calc").addEventListener("click", calculate);