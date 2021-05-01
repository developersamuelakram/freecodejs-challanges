// casting our elements from html to js

const usbtn = document.getElementById("usbtn");
const emailBtn = document.getElementById("emailBtn");
const thNumbtn = document.getElementById("thBtn");
const pwBtn = document.getElementById("pwBtn");

// 1. US Number Validator
usbtn.addEventListener("click", validateUSNumber);

function validateUSNumber() {
  const str = document.getElementById("usNumber").value;

  NumberValidator(str);
}

function NumberValidator(str) {
  let regCriteria = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  console.log("American Tel Number is " + str + " " + regCriteria.test(str));
  if (regCriteria.test(str) === true) {
    document.getElementById("usMessage").textContent =
      "US Number Format is Valid ✔";
    document.getElementById("usMessage").style.color = "blue";
  } else {
    document.getElementById("usMessage").textContent =
      "US Number Format is Invalid ❌";
    document.getElementById("usMessage").style.color = "red";
  }
}

//  ^ means at the start
//  \s space
// ? maybe or maybe not
// \d digit
// {3} means exact number of digits
// $ at the end

// explaination
// 1. carret character is going to ensure that maybe there is space or number one at the start
// 2. followed by space or 1 .. There will be exact 3 digits
//                                       OR
// 1. number will start with 3 digits ✔
// 2. then space or - (dash) or maybe no space and no dash ✔
// 3. then space or - (dash) or maybe no space and no dash ✔
// 4. at the end $ is ensuring that only 4 digits are there ✔

//2.  Email Validator (samuel@mecode.asia)

emailBtn.addEventListener("click", validateEmails);
function validateEmails() {
  const emailInput = document.getElementById("checkEmail").value;
  CheckMyEmail(emailInput);

  if (emailInput === "") {
    document.getElementById("emailMessage").textContent =
      " No Strings Entered ";
  }
}

function CheckMyEmail(str) {
  let emailCriteria = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log("Email is " + str + " is " + emailCriteria.test(str));
  if (emailCriteria.test(str) === true) {
    document.getElementById("emailMessage").textContent =
      "Email Format is Valid ✔ ";
    document.getElementById("emailMessage").style.color = "blue";
  } else {
    document.getElementById("emailMessage").textContent =
      "Email Format is Invalid ❌ ";
    document.getElementById("emailMessage").style.color = "red";
  }
}

// explaination

// 1. ^ carret is going to ensure that there is no space or @ sign at the beginning it is negating those. ✔
// 2.  so whatever the number or text or anything then we make sure that there is @ sign ✔
// 3. then again after that we negate space or additional @ signs ✔
// 4. then we make sure that there is dot ✔
// 5. then we make sure to negate any space or any @sign at the end. ✔

//3. Thai Number Validator  (+66-631-617932 or 0631617932 or 06-316-17932)

thNumbtn.addEventListener("click", validateThaiNumber);

function validateThaiNumber() {
  const thaiNumberValidator = document.getElementById("checkTHNumber").value;

  ThaiTel(thaiNumberValidator);
}

function ThaiTel(str) {
  let thNumCriteria = /^\+?(\d{2})[\s\-]?(\d{3})[\s\-]?(\d{5})$/;

  if (thNumCriteria.test(str) === true) {
    document.getElementById("thMessage").textContent =
      "TH Number Format is Valid ✔";
    document.getElementById("thMessage").style.color = "blue";
  } else {
    document.getElementById("thMessage").textContent =
      "TH Number Format is Invalid ❌";
    document.getElementById("thMessage").style.color = "red";
  }

  console.log("Number format is " + thNumCriteria.test(str));
}

// Explaination

// 1. ^ is making sure that + is at the beginning and ? is making sure that if its not there number is still valid ✔
// 2. \s\- is making sure if there are spaces or dashses or both of these are not there number is still valid ✔
// 3. if there are no dashes or spaces still number is valid ✔

// Create Password
// (i) First letter is capital
//  (ii) Need two  number at the end
//  (iii) Need some special charcters (alphanumerics) in midle
//  Password Examples:

pwBtn.addEventListener("click", testPassword);
function testPassword() {
  const pwInput = document.getElementById("checkPw").value;

  ValidatePassword(pwInput);
}
function ValidatePassword(str) {
  let pwCriteria = /^([A-Z]{1})(\w+)(\W+)(\d{2})$/;

  if (pwCriteria.test(str) === true) {
    document.getElementById("pwMessage").textContent =
      "Password meets criteria ✔";

    document.getElementById("pwMessage").style.color = "blue";
  } else {
    document.getElementById("pwMessage").textContent =
      "Password does not meet criteria ❌";

    document.getElementById("pwMessage").style.color = "red";
  }

  console.log(pwCriteria.test(str));
}

// Explaination
// 1. [A-Z] character class is ensuring that we must put first letter capital ✔
// 2. \w+ ensures we can put number or word regardless case ✔
// 3. then \W gives us ability to add $- etc kind of characters ✔
// 4. 2 numbers at the end ✔

// testing views

// Palindrome

const checkPlnbtn = document.getElementById("btnPalin");

checkPlnbtn.addEventListener("click", palindromeValidator);

function palindromeValidator() {
  const palinString = document.getElementById("checkPalindrome").value;

  palindrome(palinString);

  if (palindrome(palinString) === true) {
    document.getElementById("palinMessage").textContent =
      "Word is a Palindrome ✔";
    document.getElementById("palinMessage").style.color = "blue";
  } else {
    document.getElementById("palinMessage").textContent =
      "Word is a not Palindrome ❌";
    document.getElementById("palinMessage").style.color = "red";
  }
}

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}

// explaination

// replace is finding all non words and underscores throught the string and replace it with empty string and converting it to lowercase then if this criteria is equal to when we split each word of a string and reverse it and join it means word is sounding same as it was before being reversed

// palindrom is a word that sounds same when reads backwards "eye" is eye even if you read it backwardly.
//  1. Because a palindrome is the word which is read and sounds same whether backwards or forwards
// Replace all spaces and alphanumerics with empty string first of all \W and _ also.
// if the word does not have any white spaces , alphanumerics then // check if the same string when it reversed
// is it equal to that.
// so if there are dollar signs or any kind of shit between words it would still return true because we already have set cases for alphanumerics an spaces.

//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2

// Romanized

const btnRoman = document.getElementById("btnRoman");
btnRoman.addEventListener("click", romanized);

function romanized() {
  const numValue = document.getElementById("checkRoman").value;
  conversionFunction(numValue);

  const storeResult = conversionFunction(numValue);
  document.getElementById(
    "romanMessage"
  ).textContent = `Roman Value is ${storeResult}`;
  document.getElementById("romanMessage").style.color = "blue";

  if (storeResult === "") {
    document.getElementById("romanMessage").textContent =
      "Enter Number to Convert";
  }
}

//writing a function that takes in a value and also contains two arrays
// one array is of decimal values, and one is of roman numerals

let conversionFunction = function (num) {
  let decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanChars = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // will store value in this after conversion
  let converted = "";

  for (let i = 0; i < decimalNumber.length; i++) {
    // infinitely running the loop until its equal to that number
    while (decimalNumber[i] <= num) {
      // whatever the value is at the index in roman chars add that into converted
      converted += romanChars[i];
      // subtracting the num from a decimal number present in array from the index
      num -= decimalNumber[i];
    }
  }

  return converted;
};

console.log(conversionFunction(10));

// Explaination:
// 1. We are looping through the indices
// of decimalNumber and we continue to loop until WHILE the value at the current index will fit into the num, and then we add the roman number and decrease the provided num by the decimal value and then we return our convereted number.

// Cash Register

let denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  let output = { status: null, change: [] };
  let change = cash - price;

  // Transform CID array into drawer object
  let register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // manging the  exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle the insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  let change_arr = denom.reduce(function (acc, curr) {
    let value = 0;
    // meanwhile there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // in case of no elements in change_arr or we have leftover change, return
  // then we are returning string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Change is .
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

// checking now
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0],
  ])
);

// explaination:
//  We are creating an array of objects that has value of each denomination of currency along with an output object that has status and change keys. After that we are converting our cash in drawer into an object drawer. we are manging exact change and also insufficient funds, then we are looping through the denoms array and updating the change and values because there still money of each currency or type in the drawer and denomination is greater than the change remaining in drawer, Adding this denomanation to the acculator of change array, and if any of this type was used. Array that contains change that is due is 2D array so we will sort it from highest to lowest denomation (currency). if there are no elements in change array or we still owe change we are returning the output object with a message that INSUFFICIENTS FUNDS. At last we can provide the correct change and return the ouput obkect with message open and array that contains the value of change.

// Last challenge

//  Ceasers Ciphers

function rot13(str) {
  // Spliting the provided String  into a  array of characters
  return (
    str
      .split("")
      // Iterating over each present character in the array
      .map.call(str, function (char) {
        // Converting char to a character code
        let x = char.charCodeAt(0);
        // Checking if character is ranging between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return the character that was not converted
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // in All other cases shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoining the array into a string
}
