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
