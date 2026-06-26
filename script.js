function calculate(num1, num2, operation){
  switch(operation){
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "modulus":
      return num1 % num2;
    case "power":
      return Math.pow(num1, num2);
    case "sqrt":
      return Math.sqrt(num1);
    case "log":
      return Math.log10(num1);
    case "divide":
      if (num2===0) return "Error: Cannot divide by zero";
      return num1 / num2;
    default:
      return "Error: Invalid operation";
  }
}
const form = document.getElementById("calculator-form");
const resultElement = document.getElementById("result");
form.addEventListener("submit", (event) =>{
  event.preventDefault();
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
 
  if (isNaN(num1) || isNaN(num2) || operation === "") {
    resultElement.textContent = "Please enter valid numbers";
    return;
  }
  const result = calculate(num1, num2, operation);
  resultElement.textContent = `Result: ${result}`;

});