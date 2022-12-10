// GENERATE PASSWORD FUNCTION //
function generatePassword() {
  // This section creates all window prompts/confirms for the user to select desired criteria for their password. User input validation is performed and window alerts will appear the user's input does not meet certain conditions. When window alerts appear, the generatePassword function is re-runs so that they can input data that meets the required conditions. //
  var length = window.prompt("How many characters would you like your password to be?"); // Stores the user's desired characters in variable "length" //
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
  // Stores boolean values created by window confirms into variables that can be used later; i.e., we are capturing the user's preferences on which character types to use in their generated password //
  if (!lowerCase && !upperCase && !numeric && !special) {
    window.alert("You must select at least one character type in order to generate a password.");
    generatePassword();
  }
  // Character String Declarations //
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // Converts each character string into an array using the "split" string-method //
  var lowerCaseArray = lowerCaseCharacters.split("");
  var upperCaseArray = upperCaseCharacters.split("");
  var numericArray = numericCharacters.split("");
  var specialArray = specialCharacters.split("");
  // Utilizes boolean user input variables to create a new array "allSelectedTypes" containing the character arrays that the user would like included in their generated password. "allSelectedTypes" is an array of arrays. //
  var allSelectedTypes = [];
  for (i = 0; i < 4; i++) {
  if (lowerCase) {
    allSelectedTypes[i] = lowerCaseArray;
    lowerCase = false; // resets the user input to false if it was previously true so that this action is not repeated when the loop runs again. //
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
  // Loop that assembles the new password one character at a time (up until the character length input by the user), by first selecting a random array within the "allSelectedTypes" array (stored in "arrayIndex"), then by selecting a random character in that array (stored in "characterIndex"). Because "allSelectedTypes" is an array of arrays, each new character to be added to the generated password is called using both indices ("arrayIndex" and "characterIndex"). //
  var password = "";
  for (i = 0; i < length; i++) {
    var arrayIndex = Math.floor(Math.random() * allSelectedTypes.length);
    var characterIndex = Math.floor(Math.random() * allSelectedTypes[arrayIndex].length);
    password += allSelectedTypes[arrayIndex][characterIndex];
  }
  return(password);
}

// Displays password to the #password text area //
function writePassword(event) {
  event.preventDefault();
  var password = ""
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate button that will run writePassword function when the "Generate Password" button is clicked //
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
