const myAge = 34; // constant with my age value.
let earlyYears = 2; // variable that will change its value.
earlyYears *= 10.5; // also can be written as: earlyYears = earlyYears * 10.5
let laterYears = myAge - 2; // variable changer that substract 2 from myAge.
laterYears *= 4; // new value that multiply the laterYears variable.
const myAgeInDogYears = myAge + laterYears; // sum of myAge value and laterYears value.
let myName = "Lucia".toLowerCase(); //variable that is returned with lowercase letters.
//myName = "Lucia".toUpperCase(); --- tested
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);