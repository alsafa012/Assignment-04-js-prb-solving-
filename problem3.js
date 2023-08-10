// function sortMaker(arr) {
//      if(!Array.isArray(arr) || arr.length !== 2){
//           return "Invalid array"
//      }
//      else if(typeof arr[0] !== "number" || typeof arr[1] !== "number"){
//           return 'Invalid length'
//      }
//      else if( arr[0] < 0 || arr[1] < 0 ){
//           return "Invalid Input"
//      }  
//      else if (arr[0] === arr[1] ){
//           return "equal";
//      }else{ 
//           if(arr[0] < arr[1]){
//           [ arr[0] , arr[1] ]= [arr[1] , arr[0] ];
//      }
//      }
//      return arr;
// }
// console.log(sortMaker([2,78]));
// console.log(sortMaker([4,2]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([1,0]));
// console.log(sortMaker([0,8]));
// console.log(sortMaker([1,"ksdi"]));
// console.log(sortMaker([1,6,8]));
// console.log(sortMaker([-1,6,8]));
// console.log(sortMaker([-8]));
// console.log(sortMaker("skhduisd"));
 


//  function sortMaker(arr) {
//      if (!Array.isArray(arr) || arr.length !== 2) {
//          return "Invalid ary";
//      }
     
//      if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
//          return "Invalid lentth";
//      }
     
//      if (arr[0] < 0 || arr[1] < 0) {
//          return "Invalid Input";
//      }
     
//      if (arr[0] === arr[1]) {
//          return "equal";
//      } else {
//          if (arr[0] < arr[1]) {
//              // Swap elements if the first element is greater than the second
//              [arr[0], arr[1]] = [arr[1], arr[0]];
//          }
//          return arr;
//      }
//  }
 
 
//  console.log(sortMaker([2, 3]));   // Output: [2, 3]
//  console.log(sortMaker([4, 2]));   // Output: [2, 4]
//  console.log(sortMaker([4, 4]));   // Output: equal
//  console.log(sortMaker([1, 2]));   // Output: [1, 2]
//  console.log(sortMaker([4, -2]));  // Output: Invalid Input
//  console.log(sortMaker([-4, -2])); // Output: Invalid Input
//  console.log(sortMaker([4, 0]));   // Output: Invalid Input
//  console.log(sortMaker([4, "khdih"]));   // Output: Invalid Input
//  console.log(sortMaker(4, "khdih"));   // Output: Invalid Input
//  console.log(sortMaker([2]));   // Output: Invalid Input
 







// temp
function sortMaker(arr) {
    if(!Array.isArray(arr) || arr.length !== 2){
         return "Invalid array"
    }
    else if(typeof arr[0] !== "number" || typeof arr[1] !== "number"){
         return 'Invalid length'
    }
    else if( arr[0] < 0 || arr[1] < 0 ){
         return "Invalid Input"
    }  
    else if (arr[0] === arr[1] ){
         return "equal";
    }else{ 
         if(arr[0] < arr[1]){
          // [ arr[0] , arr[1] ]= [arr[1] , arr[0] ]; 
         let temp = 8;
         temp=arr[0];
         arr[0]=arr[1];
         arr[1]=temp;
    }
    }
    return arr;
}
console.log(sortMaker([2,8]));
console.log(sortMaker([4,2]));
console.log(sortMaker([4,4]));
console.log(sortMaker([1,0]));
console.log(sortMaker([0,8]));
console.log(sortMaker([1,"ksdi"]));
console.log(sortMaker([1,6,8]));
console.log(sortMaker([-1,6,8]));
console.log(sortMaker([-8]));
console.log(sortMaker("skhduisd"));