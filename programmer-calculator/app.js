function calculate(){
    document.getElementById("mode-box1").addEventListener("change", function() {
        const input = isNaN(parseInt(document.getElementById("number-input").value, 10))?"":parseInt(document.getElementById("number-input").value, 10);

        // Get the element
        const modeBox1 = document.getElementById("mode-box1");
        const modeBox2 = document.getElementById("mode-box2");
        const box1 = modeBox1.value;
        const box2 = modeBox2.value;

        console.log(`Selected mode 1: ${box1}`);
        console.log(`Selected mode 2: ${box2}`);

        const isDecimalToDecimal = box1 === "decimal" && box2 === "decimal";
        const isDecimalToBinary = box1 === "decimal" && box2 === "binary";
        const isDecimalToHexadecimal = box1 === "decimal" && box2 === "hexadecimal";
        const isDecimalToOctal = box1 === "decimal" && box2 === "octal";

        const isBinaryToBinary = box1 === "binary" && box2 === "binary";
        const isBinaryToDecimal = box1 === "binary" && box2 === "decimal";
        const isBinaryToHexadecimal = box1 === "binary" && box2 === "hexadecimal";
        const isBinaryToOctal = box1 === "binary" && box2 === "octal";

        const isHexadecimalToHexadecimal = box1 === "hexadecimal" && box2 === "hexadecimal";
        const isHexadecimalToDecimal = box1 === "hexadecimal" && box2 === "decimal";
        const isHexadecimalToBinary = box1 === "hexadecimal" && box2 === "binary";
        const isHexadecimalToOctal = box1 === "hexadecimal" && box2 === "octal";

        const isOctalToOctal = box1 === "octal" && box2 === "octal";
        const isOctalToDecimal = box1 === "octal" && box2 === "decimal";
        const isOctalToBinary = box1 === "octal" && box2 === "binary";
        const isOctalToHexadecimal = box1 === "octal" && box2 === "hexadecimal";

        const isDecimalToBCD = box1 === "decimal" && box2 === "bcd";

        function result(value) {
            return document.getElementById("result").innerText = value;
        }
        
        if (isDecimalToDecimal) {
            let output = input; // Decimal to Decimal equal itself

            result(output);

        } else if (isDecimalToBinary) {
            let temp = input;
            let output = ""; 

            while (temp > 0) {
                output = (temp % 2) + output;
                temp = Math.floor(temp / 2);
            }
            result(output);

        } else if (isDecimalToHexadecimal) {

        } else if (isDecimalToOctal) {

        } else if (isBinaryToBinary) {

        } else if (isBinaryToDecimal) {

        } else if (isBinaryToHexadecimal) {

        } else if (isBinaryToOctal) {

        } else if (isHexadecimalToHexadecimal) {

        } else if (isHexadecimalToDecimal) {

        } else if (isHexadecimalToBinary) {

        } else if (isHexadecimalToOctal) {

        } else if (isOctalToOctal) {

        } else if (isOctalToDecimal) {

        } else if (isOctalToBinary) {

        } else if (isOctalToHexadecimal) {

        } else if (isDecimalToBCD) {

        } else {
            console.log(`[ERROR CODE: 1] No Operation!`);
        }
    });
}

setInterval(calculate, 100);




// setInterval(calculate,100);


// function calculate(){

// }


// function calculate() {

//     function dec2bin(input){
//         var output = "";

//         while (input != 0) {
//             output = (input % 2).toString() + output;
//             input = Math.floor(input / 2);
//         }

//         return output;
//     }

//     console.log(dec2bin(412));

    
    
//     if (isDecimalToBinary) {
//         document.getElementById("result").innerText = dec2bin(input);
//     }
//     // if (isDecimalToDecimal) {
//         //     output(input);
//     //     console.log(`Calculating "${input}" From Decimal To Decimal`);
//     // } else if (isDecimalToBinary) {
//         //     output(dec2bin(input));
//     //     console.log(`Calculating "${input}" From Decimal To Binary`);
//     // } else if (isDecimalToHexadecimal) {
//         //     // let dec2hex = parseInt(input, 10).toString(16).toUpperCase();
//     //     output(dec2hex);
//     //     console.log(`Calculating "${input}" From Decimal To Hexadecimal`);
//     // } else if (isDecimalToOctal) {
//     //     // let dec2oct = parseInt(input, 10).toString(8);
//     //     output(dec2oct);
//     //     console.log(`Calculating "${input}" From Decimal To Octal`);
//     // } else if (isBinaryToBinary) {
//         //     output(input);
//         //     console.log(`Calculating "${input}" From Binary To Binary`);
//     // } else if (isBinaryToDecimal) {
//     //     // let bin2dec = parseInt(input, 2).toString(10);
//     //     output(bin2dec);
//     //     console.log(`Calculating "${input}" From Binary To Decimal`);
//     // } else if (isBinaryToHexadecimal) {
//     //     // let bin2hex = parseInt(input, 2).toString(16).toUpperCase();
//     //     output(bin2hex);
//     //     console.log(`Calculating "${input}" From Binary To Hexadecimal`);
//     // } else if (isBinaryToOctal) {
//     //     // let bin2oct = parseInt(input, 2).toString(8);
//     //     output(bin2oct);
//     //     console.log(`Calculating "${input}" From Binary To Octal`);
//     // } else if (isHexadecimalToHexadecimal) {
//         //     output(input);
//         //     console.log(`Calculating "${input}" From Hexadecimal To Hexadecimal`);
//         // } else if (isHexadecimalToDecimal) {
//             //     // let hex2dec = parseInt(input, 16).toString(10);
//     //     output(hex2dec);
//     //     console.log(`Calculating "${input}" From Hexadecimal To Decimal`);
//     // } else if (isHexadecimalToBinary) {
//         //     // let hex2bin = parseInt(input, 16).toString(2);
//         //     output(hex2bin);
//         //     console.log(`Calculating "${input}" From Hexadecimal To Binary`);
//         // } else if (isHexadecimalToOctal) {
//             //     // let hex2oct = parseInt(input, 16).toString(8);
//     //     output(hex2oct);
//     //     console.log(`Calculating "${input}" From Hexadecimal To Octal`);
//     // } else if (isOctalToOctal) {
//         //     output(input);
//         //     console.log(`Calculating "${input}" From Octal To Octal`);
//         // } else if (isOctalToDecimal) {
//             //     // let oct2dec = parseInt(input, 8).toString(10);
//             //     output(oct2dec);
//     //     console.log(`Calculating "${input}" From Octal To Decimal`);
//     // } else if (isOctalToBinary) {
//         //     // let oct2bin = parseInt(input, 8).toString(2);
//         //     output(oct2bin);
//         //     console.log(`Calculating "${input}" From Octal To Binary`);
//         // } else if (isOctalToHexadecimal) {
//             //     // let oct2hex = parseInt(input, 8).toString(16).toUpperCase();
//             //     output(oct2hex);
//             //     console.log(`Calculating "${input}" From Octal To Hexadecimal`);
//             // } else {
//                 //     console.log(`(ERROR 1) No Operation Right Now`);
//                 // }
                
// }

// document.getElementById("calc").addEventListener("click", calculate);
// setInterval(calculate(),100);