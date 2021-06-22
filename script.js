// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password functions for selected password options ie.uppercase, lowercase, numbers, characters

//Created functions using character codes 

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+ 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+ 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+ 48);
}

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random()*15)+ 33);
}


// created propts for selecting password options
var pswdLength = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length= Number(prompt("Length must be 8-128 characters. Please verify how long you would like your password to be."));

var uppers = confirm("Will your password include uppercase letters?");
var lowers = confirm("Will your password include lowercase letters?");
var numbers = confirm("Will your password include numbers?");
var symbols = confirm("Will your password include symbols?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!")
  uppers = confirm("Will your password include uppercase letters?");
  lowers = confirm("Will your password include lowercase letters?");
  numbers = confirm("Will your password include numbers?");
  symbols = confirm("Will your password include symbols?");

}


