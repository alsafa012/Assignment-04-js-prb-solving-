// 01
function cubeNumber(number) {
     if (typeof number === "number" && number >= 0) {
          return Math.pow(number, 3);
     } else {
          return "Invalid...Please enter a positive number";
     }
}
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber(0));

// 02
function matchFinder(string1, string2) {
     if (typeof string1 !== "string" || typeof string2 !== "string") {
          return "invalid..Please enter a string";
     }
     if (string1.includes(string2)) {
          return true;
     } else {
          return false;
     }
}
// console.log(matchFinder("John Doe","ohn"));
// console.log(matchFinder("JavaScript","Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));
// console.log(matchFinder("Peter Parker",3));

// 3
function sortMaker(arr) {
     if (!Array.isArray(arr) || arr.length !== 2) {
          return "Invalid Input";
     } else if (typeof arr[0] !== "number" || typeof arr[1] !== "number") {
          return "Invalid Input";
     } else if (arr[0] < 0 || arr[1] < 0) {
          return "Invalid Input";
     } else if (arr[0] === arr[1]) {
          return "equal";
     } else {
          if (arr[0] < arr[1]) {
               [arr[0], arr[1]] = [arr[1], arr[0]];
               
          }
     }
     return arr;
}
// console.log(sortMaker([2,3]));
// console.log(sortMaker([4,2]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([1,2]));
// console.log(sortMaker([0,2]));
// console.log(sortMaker([4,-2]));

// 04:
function findAddress(obj) {
     const totalValues = [];
     if (obj.street !== undefined) {
          totalValues.push(obj.street);
     } else {
          totalValues.push("__");
     }
     if (obj.house !== undefined) {
          totalValues.push(obj.house);
     } else {
          totalValues.push("__");
     }
     if (obj.society !== undefined) {
          totalValues.push(obj.society);
     } else {
          totalValues.push("__");
     }
     return totalValues.join(",");
}
// const address = { street: 10, house: "15A", society: "Earth Perfect" };
// console.log(findAddress(address));
// const address1 = { street: 10, society: "Earth Perfect" };
// console.log(findAddress(address1));
// const address2 = { street: 10 };
// console.log(findAddress(address2));

//  05:

function canPay(changeArray, totalDue) {
     if (changeArray.length === 0) {
          return "invalid...Empty Array";
     } else {
          let myTotalMoney = 0;
          for (let i = 0; i < changeArray.length; i++) {
               myTotalMoney = myTotalMoney + changeArray[i];
          }
          if (myTotalMoney >= totalDue) {
               return true;
          }
          return false;
     }
}
// console.log(canPay([4, 1, 5], 10));
// console.log(canPay([1, 2, 5], 10));
// console.log(canPay([1, 5, 5], 10));
// console.log(canPay([], 10));



console.log([2,3]);









