// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("How many characters would you like your password to be?");
  if (length < 8 || length > 128) {
    window.alert("Please enter a character-length between 8 and 128.");
    generatePassword();
  }
  var lowerCase = window.confirm("Would you like your password to include lowercase characters?");
  var upperCase = window.confirm("Would you like your password to include uppercase characters?");
  var numbers = window.confirm("Would you like your password to include numbers?");
  var special = window.confirm("Would you like your password to include special characters (i.e., '!, ?, $, #, %, etc.')?");
  if (!lowerCase && !upperCase && !numbers && !special) {
    window.alert("You must select at least one character type in order to generate a password.");
    generatePassword();
  }


}
  

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = ""
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
