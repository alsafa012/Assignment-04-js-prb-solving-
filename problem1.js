
//  function cubeNumber(num) {
//      // const number=3;
//      if (typeof num === 'number' && num > 0) {
//          return Math.pow(num, 3);
//      } else {
//          return "Invalid input. Please provide a positive number.";
//      }
//  }
 
// //  Test cases
//  console.log(cubeNumber(4));
//  console.log(cubeNumber(-1));
//  console.log(cubeNumber("hello")); 
//  function cubeNumber(number) {
//      if (typeof number !== 'number') {
//          return "মন্তব্য: আপনি একটি সঠিক নাম্বার প্রদান করতে হবে।";
//      }
 
//      if (number < 0) {
//          return "মন্তব্য: আপনি ধনাত্মক একটি নাম্বার প্রদান করতে হবে।";
//      }
 
//      const result = Math.pow(number, 3);
//      return result;
//  }
 
 // টেস্ট করা
//  console.log(cubeNumber(3)); // Output: 27
//  console.log(cubeNumber(4)); // Output: 64
//  console.log(cubeNumber(-2)); // Output: "মন্তব্য: আপনি ধনাত্মক একটি নাম্বার প্রদান করতে হবে।"
//  console.log(cubeNumber("abc")); // Output: "মন্তব্য: আপনি একটি সঠিক নাম্বার প্রদান করতে হবে।"
 





function cubeNumber(number) {
     if(typeof number ==='number' && number >= 0){
          // return number ** 3;
          return Math.pow(number,3);
     }else{
          return "Invalid.Please enter a positive number"
     }
}
console.log(cubeNumber(3))
console.log(cubeNumber(4))
console.log(typeof cubeNumber(-4))
console.log(typeof cubeNumber('4skdiu'))