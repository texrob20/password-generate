// character types included by default
var chars = "";

// generating the password after user input regarding character types and length
function generatePassword() {
  chars = generateChars();
  console.log(chars);
  var passwordLength = document.getElementById("passwordLength").value;
  var genPassword = "";
  console.log(passwordLength);
  if (passwordLength === ""){
    window.alert('Please select a password length');
  }
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    genPassword += chars.substring(randomNumber, randomNumber +1);
  }
  console.log(genPassword);
  return genPassword;
  document.getElementById("password").value = genPassword;
}

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
