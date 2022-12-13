# Password Generator

## Description

This application is a random passord generator, allowing a user to define their desired password criteria of length and character type(s), and then generating a random password that meets those criteria. This will allow users to create strong and secure passwords to increase the security of their company's sensitive data. 

I was motivated to create this application because data security is paramount in today's society. Customers trust and depend on companies to safely guard the data they share and when employees don't have a quick way to create strong passwords, they can sometimes create passwords that can be guessed easily. This puts consumer data at risk and can greatly damage public trust in a company if data breaches occur. I currently work in a University Registrar Office and we take the protection of student data quite seriously. It is this personal experience that helps put this topic in perspective and serves as a motivator to make easy ways for employees with access to sensitive data to increase security.

Through working on this project, I learned a ton of great JavaScript tools to make applications that are interactive and responsive, while also being strategic and writing code that aligns with the DRY principle ("Don't Repeat Yourself"). Some of the biggest points of learning include:

* Declaring global and local variables
* Establishing and calling functions 
* Window prompts, confirms, and alerts
* If statements and logical operators
* For loops
* Strings and string methods
* Arrays and indices (and array methods)
* Math objects in JavaScript
* The Document Object Model and query selectors
* Event Listeners

## Installation

N/A

## Usage

This application allows the user to generate a password when they click the button that says "Generate Password". When the button is pressed it will prompt the user to enter their desired number of characters for their new password. The application will perform data validation to make sure the user enters a number between 8 and and 128 characters. After they successfully answer that prompt, 4 confirm messages will appear, one after another, asking the user if they would like their password to include lowercase, uppercase, numeric, or special characters. After those for window messages, the application will perform data validation again to make sure that the user selected at least one of the four character types. If at either data validation checkpoint the user fails to meet the criteria explained above, an alert will appear explaining their error, and the function will restart so they can input the correct data. Once the application has stored the user's desired password length and character types to include, it will generate a random password of that length containing only the selected character types. The user can run the application as many times as they would like and the screen will update with a new password each time that meets the selected criteria.

Link to deployed application:

    https://michael-loeffler.github.io/Professional-Portfolio/

![Preview of Application and demonstration of features](./assets/images/portfolioDemo.gif)

## Credits
OWASP List of Special Characters for Passwords

    https://owasp.org/www-community/password-special-characters

Mozilla Developer Network


## License

MIT License

Copyright (c) [2022] [Michael Loeffler]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---