/*console.log("Hello");
let x = 10;
console.log(typeof x);
x = "Nonthanan";
console.log(typeof x);

const y =5;*/

console.log("50" +5);

const firstName = "Nonthanan";
const lastName = "Prakopkit"

//console.log(firstName[1]);

const fullName = firstName + " " + lastName; 
const fullNameWithIntro = "Your firstname is " + firstName + " Your Last Name is "+ lastName;
console.log(fullName);
const cancateWithGrave = `Your firstnaem is ${firstName} Your last name is ${lastName}`;

const upperCase = firstName.toUpperCase();
console.log(upperCase);
const lowerCase = lastName.toLowerCase;
console.log(lowerCase);

const withSpace = " HelloTrim ";
console.log(withSpace);
const noSpace = withSpace.trim();
console.log(noSpace);

const token = "Bearer=1234567";
console.log(token);
const splitWord = token.split("=");
console.log(splitWord[1])

const axios = requre("axios");

try {
    const data = axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(data);
} catch(error) {
    console.log("Error occured");
}




