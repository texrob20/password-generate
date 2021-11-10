// character types included by default
var lowercase = true;
var upercase = true;
var numeric = true;
var special = true;

// generating the password after user input regarding character types and length
function generatePassword() {
  var chars = generateChars();
  var passwordLength = generateLength();
  var genPassword = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    genPassword += chars.substring(randomNumber, randomNumber +1);
  }
  document.getElementById("password").value = genPassword;
}

function generateChars() {
  if (lowercase === true) {
    chars = chars + "abcdefghijklmnopqrstuvwxyz"; }
  if (uppercase === true) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
  if (numeric === true) {
    chars = chars + "0123456789"; }
  if (special === true) {
    chars = chars + "!@#$%^&*()"; }
}

function generateLength() {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function passwordParameters(){
  var lowercaseSelect = window.prompt('Would you like to include lowercase letters? Yes or No');
  if (lowercaseSelect === "Yes" || lowercaseSelect === "yes" || lowercaseSelect === "YES") {
    lowercase = true; }
  else if (lowercaseSelect === "No" || lowercaseSelect === "no" || lowercaseSelect === "NO") {
    lowercase = false; }
  else {window}

  var uppercaseSelect = window.prompt('Would you like to include lowercase letters? Yes or No');
  if (uppercaseSelect === "Yes" || uppercaseSelect === "yes" || uppercaseSelect === "YES"){
    uppercase = true; }
  else { uppercase = false;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
