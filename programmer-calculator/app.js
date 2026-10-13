function calculate() {
    document
        .getElementById("mode-box1")
        .addEventListener("change", function () {
            const input = isNaN(
                parseInt(document.getElementById("number-input").value, 10),
            )
                ? ""
                : parseInt(document.getElementById("number-input").value, 10);

            const box1 = document.getElementById("mode-box1").value;
            const box2 = document.getElementById("mode-box2").value;

            console.log(`Selected mode 1: ${box1}`);
            console.log(`Selected mode 2: ${box2}`);

            switch (box1) {
                case "decimal":
                    switch (box2) {
                        case "decimal":
                            let output = input; // itself
                            break;

                        case "binary":
                            // write logic here
                            break;

                        case "hexadecimal":
                            // write logic here
                            break;

                        case "octal":
                            // write logic here
                            break;

                        default:
                            break;
                    }

                    break;
                case "binary":
                    switch (box2) {
                        case "decimal":
                            // write logic here
                            break;

                        case "binary":
                            let output = input; // itself
                            break;

                        case "hexadecimal":
                            // write logic here
                            break;

                        case "octal":
                            // write logic here
                            break;

                        default:
                            break;
                    }

                    break;
                case "hexadecimal":
                    switch (box2) {
                        case "decimal":
                            // write logic here
                            break;

                        case "binary":
                            // write logic here
                            break;

                        case "hexadecimal":
                            let output = input; // itself
                            break;

                        case "octal":
                            // write logic here
                            break;

                        default:
                            break;
                    }

                    break;
                case "octal":
                    switch (box2) {
                        case "decimal":
                            // write logic here
                            break;

                        case "binary":
                            // write logic here
                            break;

                        case "hexadecimal":
                            // write logic here
                            break;

                        case "octal":
                            let output = input; // itself
                            break;

                        default:
                            break;
                    }

                    break;
                default:
                    break;
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
