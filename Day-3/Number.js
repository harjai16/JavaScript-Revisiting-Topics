const number = 123.345;
console.log(number.toExponential(2)); // 1.23e+2 (scientific notation with 2 decimal places)
console.log(number.toFixed(2)); // 123.35 (fixed-point notation with 2 decimal places)
console.log(number.toPrecision(4)); // 123.3 (precision with 4 significant digits)
console.log(number.toLocaleString("en-IN")); // 123.345 (locale-specific formatting)    
console.log(number.toLocaleString("en-IN", { style: "currency", currency: "INR" })); // ₹123.35 (locale-specific formatting with currency)
