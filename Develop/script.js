// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("How many characters would you like your password to be?");
  if (!length) {
    return;
  } else if (length < 8 || length > 128) {
    window.alert("Please enter a character-length between 8 and 128.");
    generatePassword();
  }
  var lowerCase = window.confirm("Would you like your password to include lowercase characters?");
  var upperCase = window.confirm("Would you like your password to include uppercase characters?");
  var numeric = window.confirm("Would you like your password to include numbers?");
  var special = window.confirm("Would you like your password to include special characters (i.e., '!, ?, $, #, %, etc.')?");
  if (!lowerCase && !upperCase && !numeric && !special) {
    window.alert("You must select at least one character type in order to generate a password.");
    generatePassword();
  }

  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  var lowerCaseArray = lowerCaseCharacters.split("");
  var upperCaseArray = upperCaseCharacters.split("");
  var numericArray = numericCharacters.split("");
  var specialArray = specialCharacters.split("");

  var allSelectedTypes = [];
  for (i = 0; i < 4; i++) {
  if (lowerCase) {
    allSelectedTypes[i] = lowerCaseArray;
    lowerCase = false;
  } else if (upperCase) {
    allSelectedTypes[i] = upperCaseArray;
    upperCase = false;
  } else if (numeric) {
    allSelectedTypes[i] = numericArray;
    numeric = false;
  } else if (special) {
    allSelectedTypes[i] = specialArray;
    special = false;
  }
  }

  var password = "";
  for (i = 0; i < length; i++) {
    var arrayIndex = Math.floor(Math.random() * allSelectedTypes.length);
    var characterIndex = Math.floor(Math.random() * allSelectedTypes[arrayIndex].length);
    password += allSelectedTypes[arrayIndex][characterIndex];
    console.log(password);
  }
  return(password);
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
