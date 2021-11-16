## Password Generator

This is the Javascript Challenge: Password Generator for the UTSA Coding Bootcamp.  The password generator contains two sections - the parameters input and the password generation.

The password generator must meet the following criteria:

GIVEN I need a new, secure password:
* WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria THEN I select which criteria to include in the password
* WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered THEN a password is generated that matches the selected criteria
* WHEN the password is generated THEN the password is either displayed in an alert or written to the page

In order to meet the required criteria, the webpage includes two sections:

## Parameters Generation
- This section begins with the requirement to select type of characters to include in the password and the password length.
- Check boxes are provided to prompt the user to select the types of characters to include in the password.
- A numeric input box is provided for the user to select the desired length of their password.

## Password Generator
- When the 'Generate Password" button is clicked, the supporting javscript validates the inputs.
  - It verifies at least one character type selected before generating the password.
    - Once verifited, all checked types are combined into a single string variable named 'chars' utilizing the function generateChars.  
  - The supporting javascript verifies the length of the password is between 9 and 127 characters long.
- Once the input is validated, the password length is used in the function generatePassword to randomly select characters
  - A for loop utilizes the Math.random function to select random characters from the 'chars' string.
  - Each random selected character is added to a string called 'genPassword' until the selected password length is reached. 
- Once the password is generated, the function writePassword displays the password on the webpage in the 'password' box.
- After the password has been posted to the webpage, the parameters are reset to allow the user to generate the next password.
- The optional 'Copy Password' button allows the user to copy the generated password to their clipboard so the user can paste the password into another applicatin.  This is accomplished through the function copyText.