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


// creating variables arrays

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];



// Generate password functions for selected password options ie.uppercase, lowercase, numbers, characters

// created prompts for selecting password parameters
function passwordOptions(){
 // parseInt-look up and wrap prompt
  var pswdLength = prompt("How many characters would you like your password to be?");
    if (isNaN(pswdLength)=== true) {
      alert("Length must be 8-128 characters. Please verify how long you would like your password to be.")
      return
    }
    if (pswdLength < 8) {
      alert("Length must be greater than 8.")
      return
    } 

    if (pswdLength > 128) {
      alert("Length must be less than 8. ")
      return;
    } 
    
    var hasRandomUpper = confirm("Click 'OK' if your password will include uppercase letters?");
    var hasRandomLower = confirm("Click 'OK' if your password will include lowercase letters?");
    var hasRandomNumber = confirm("Click 'OK' if your password will include numbers?");
    var hasRandomSymbol = confirm("Click 'OK' if your password will include symbols?");

//if no parameters are selected, alert and run through prompts again.
    if (!hasRandomUpper && !hasRandomLower && !hasRandomNumber && !hasRandomSymbol) {
      alert("You must select at least one character type!")
     hasRandomUpper = confirm("Click 'OK' if your password will include uppercase letters?");
     hasRandomLower  = confirm("Click 'OK' if your password will include lowercase letters?");
     hasRandomNumber = confirm("Click 'OK' if your password will include numbers?");
     hasRandomSymbol = confirm("Click 'OK' if your password will include symbols?");
  }
  let passwordParameters = {
    pswdLength: pswdLength,
    hasRandomUpper: hasRandomUpper,
    hasRandomLower:  hasRandomLower,
    hasRandomNumber: hasRandomNumber,
    hasRandomSymbol: hasRandomSymbol
  }
  return passwordParameters;
}
//add a function to get a random element from the arrays, will be passing a value to this function

function generatePassword() {
  //this returns the value for passwordParameters
  var userAnswers = passwordOptions()
  // create variable to hold the concatonated values
  // create empty arrays -> var possibleOptions = []
  // gauranteed array to hold gauranteed values

  if (userAnswers.hasRandomUpper) {
    // var possibleOptions = possibleOptions.concat(upper)
    // gauranteed.push(getRandom(upper))
  }
}