// character types included by default
var chars = "";

// generating the password after user input regarding character types and length
function generatePassword() {
  chars = generateChars();
  console.log(chars);
  var passwordLength = document.getElementById("passwordLength").value;
  var genPassword = "";
  console.log(passwordLength);
  if (passwordLength === "" || passwordLength <= 8){
    window.alert('Please select a password length greater than 8 characters');
    chars = "";
  }  else if (passwordLength >= 128) {
    window.alert('Please select a password length less than 128 characters');
    chars = "";
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    genPassword += chars.substring(randomNumber, randomNumber +1);
  }
  console.log(genPassword);
  return genPassword;
  document.getElementById("password").value = genPassword;
}

// generating the character string used to generate the password
function generateChars() {
  var chars = "";
  console.log(chars);
  var lowercase = document.getElementById('lowercase');
  var uppercase = document.getElementById('uppercase');
  var numeric = document.getElementById('numeric');
  var special = document.getElementById('special');
  if (lowercase.checked === false && uppercase.checked === false 
    && numeric.checked === false && special.checked === false){
      window.alert('Please select at least one type');
    }
  if (lowercase.checked === true) {
    chars = chars + "abcdefghijklmnopqrstuvwxyz"; }
  if (uppercase.checked === true) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
  if (numeric.checked === true) {
    chars = chars + "0123456789"; }
  if (special.checked === true) {
    chars = chars + "!@#$%^&*()"; }
  console.log (lowercase.checked);
  console.log (uppercase.checked);
  console.log (numeric.checked);
  console.log (special.checked);
  console.log (passwordLength.value);
  return chars;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Get references to the #copy element
var copyBtn = document.querySelector("#copyText");

// Write password to the #password input and reset all parameters
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  document.getElementById("lowercase").checked = false;
  document.getElementById("uppercase").checked = false;
  document.getElementById("numeric").checked = false;
  document.getElementById("special").checked = false;
  document.getElementById("passwordLength").value = null;
}

// Write password to user clipboard for use in other apps
function copyText() {
  var copyText = document.querySelector("#password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  window.alert('Text copied');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listener to copy button
copyBtn.addEventListener("click", copyText);
