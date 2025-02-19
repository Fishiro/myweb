setInterval(function() {
    var number = document.getElementById("number-input").value;
    
    var isDecimalToDecimal = document.getElementsByClassName("start").value == "decimal" && document.getElementsByClassName("end").value == "decimal";
    var isDecimalToBinary = document.getElementsByClassName("start").value == "decimal" && document.getElementsByClassName("end").value == "binary";
    var isDecimalToHexadecimal = document.getElementsByClassName("start").value == "decimal" && document.getElementsByClassName("end").value == "hexadecimal";

    var isBinaryToBinary = document.getElementsByClassName("start").value == "binary" && document.getElementsByClassName("end").value == "binary";
    var isBinaryToDecimal = document.getElementsByClassName("start").value == "binary" && document.getElementsByClassName("end").value == "decimal";
    var isBinaryToHexadecimal = document.getElementsByClassName("start").value == "binary" && document.getElementsByClassName("end").value == "hexadecimal";

    var isHexadecimalToHexadecimal = document.getElementsByClassName("start").value == "hexadecimal" && document.getElementsByClassName("end").value == "hexadecimal";
    var isHexadecimalToDecimal = document.getElementsByClassName("start").value == "hexadecimal" && document.getElementsByClassName("end").value == "decimal";
    var isHexadecimalToBinary = document.getElementsByClassName("start").value == "hexadecimal" && document.getElementsByClassName("end").value == "binary";

    if (isDecimalToDecimal) {
        console.log(`Calculating "${number}" From Decimal To Decimal`);
    } else if (isDecimalToBinary) {
        console.log(`Calculating "${number}" From Decimal To Binary`);
    } else if (isDecimalToHexadecimal) {
        console.log(`Calculating "${number}" From Decimal To Hexadecimal`);
    } else if (isBinaryToBinary) {
        console.log(`Calculating "${number}" From Binary To Binary`);
    } else if (isBinaryToDecimal) {
        console.log(`Calculating "${number}" From Binary To Decimal`);
    } else if (isBinaryToHexadecimal) {
        console.log(`Calculating "${number}" From Binary To Hexadecimal`);
    } else if (isHexadecimalToHexadecimal) {
        console.log(`Calculating "${number}" From Hexadecimal To Hexadecimal`);
    } else if (isHexadecimalToDecimal) {
        console.log(`Calculating "${number}" From Hexadecimal To Decimal`);
    } else if (isHexadecimalToBinary) {
        console.log(`Calculating "${number}" From Hexadecimal To Binary`);
    } else {
        console.log(`(ERROR 1) No Operation Right Now`);
    }

    console.log("This message is logged every 1 second");
    document.getElementById("result").innerText = number;
    console.log(number);
}, 100);

document.getElementById("calc").addEventListener("click", calculate);