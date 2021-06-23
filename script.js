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


// created prompts for selecting password options
var pswdLength = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length= Number(prompt("Length must be 8-128 characters. Please verify how long you would like your password to be."));

var uppers = confirm("Click 'okay' if your password will include uppercase letters?");
var lowers = confirm("Click 'okay' if your password will include lowercase letters?");
var numbers = confirm("Click 'okay' if your password will include numbers?");
var symbols = confirm("Click 'okay' if your password will include symbols?");

//if no options are selected, alert and run through prompts again.
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!")
  uppers = confirm("Click 'okay' if your password will uppercase letters?");
  lowers = confirm("Click 'okay' if your password will lowercase letters?");
  numbers = confirm("Click 'okay' if your password will numbers?");
  symbols = confirm("Click 'okay' if your password will symbols?");

}


