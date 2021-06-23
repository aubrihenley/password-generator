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

function generatePassword()

// creating variables for character functions

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Generate password functions for selected password options ie.uppercase, lowercase, numbers, characters

// created prompts for selecting password options
var pswdLength = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length= Number(prompt("Length must be 8-128 characters. Please verify how long you would like your password to be."));

var getRandomUpper = confirm("Click 'OK' if your password will include uppercase letters?");
var getRandomLower = confirm("Click 'OK' if your password will include lowercase letters?");
var getRandomNumber = confirm("Click 'OK' if your password will include numbers?");
var getRandomSymbol = confirm("Click 'OK' if your password will include symbols?");

//if no options are selected, alert and run through prompts again.
while (!getRandomUpper && !getRandomLower && !getRandomNumber && !getRandomSymbol) {
  alert("You must select at least one character type!")
  getRandomUpper = confirm("Click 'OK' if your password will include uppercase letters?");
  getRandomLower  = confirm("Click 'OK' if your password will include lowercase letters?");
  getRandomNumber = confirm("Click 'OK' if your password will include numbers?");
  getRandomSymbol = confirm("Click 'OK' if your password willinclude symbols?");
};

