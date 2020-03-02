//helper method recursion

// const collectOddValues = arr => {
//     let result = [];
//     const helperFunction = helperArray => {
//         if(helperArray.length === 0){
//             return 0;
//         }
//         if(helperArray[0] % 2 !== 0){
//             result.push(helperArray[0]);
//         }
//         return helperFunction(helperArray.splice(1));
//     };
//     helperFunction(arr);
//     console.log(result);
// };
// collectOddValues([1,2,3,4,5,6,7,8,9]);





//pure recursion

// let count = 0;
// const collectOddValues = arr => {

//     if(arr.length === 0){
//         return 0;
//     }
//     if(arr[0] % 2 !== 0){
//         count++;
//     }
//     return collectOddValues(arr.splice(1));
// };
// collectOddValues([1,2,3,4,5,6,7,8,9,11,13]);
// console.log(count);

//another method

// const collectOddValues = arr => {
//     let count = [];
//     if(arr.length === 0){
//         return 0;
//     }
//     if(arr[0] % 2 !== 0){
//         count.push(arr[0]);
//     }
//     count = count.concat(collectOddValues(arr.splice(1)));
//     return count;
// }
// console.log(collectOddValues([1,2,3,4,5,6,7,8,9,11,13]));





//fn called power which accepts a base and an exponent should return power of the base to the exponent(mimic Math.pow functionality)

// function power(base, exponent){
//     if(exponent === 0){
//         return 1;
//     }
//     return base * power(base, exponent - 1);
// }
// console.log(power(5,3));





//fn to find the factorial which accepts no and return factorial 

// function factorial(number){
//     if(number === 0 || number === 1){
//         return 1;
//     }
//     return number * factorial(number - 1);
// }
// console.log(factorial(6));





//fn which takes array of no and return product of them all

// function productOfArray(arr, n){
//     if(arr.length === 0){
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.splice(1));
// }
// console.log(productOfArray([1,3,4,6]));

//another method

// function productOfArray(arr, n){
//     if(n === 0){
//         return arr[n];
//     }
//     return arr[n] * productOfArray(arr, n - 1);
// }
// console.log(productOfArray([1,2,3], 2));





//fn which accepts a no and adds up all the no from 0 to no passed

// function recursiveRange(number){
//     if(number === 0){
//         return 0;
//     }
//     return number + recursiveRange(number - 1);
// }
// console.log(recursiveRange(5));





//fn which accepts a no and return the nth no in the fibonacci seq

// function fib(n){
//     if(n === 1 || n === 2){
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10));





//fn which accepts a string and return a new string in reverse

// function reverse(str){
//     if(str.length <= 1){
//         return str;
//     }
//     return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse('awesome'));





//fn returns true if string passed to it is a palindrome

// function isPalindrome(string){
//     function reverse(str){
//         if(str.length <= 1){
//             return str;
//         }
//         return reverse(str.slice(1)) + str[0];
//     }
//     let reverseString = reverse(string);
//     if(reverseString === string){
//         return true;
//     } else {
//         return false;
//     }
// }

//another solution

// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }

// console.log(isPalindrome('awesome'));
// console.log(isPalindrome('tacocat'));





//fn which accepts an array and callback fn and returns true if a single value in array returns true else false

// function someRecursive(arr, callback){
//     if(arr.length === 0){
//         return false;
//     }
//     if(callback(arr[0]) || someRecursive(arr.slice(1), callback)){
//         return true;
//     } else {
//         return false;
//     }
// }
// function isOdd(n){
//     if(n % 2 === 0){
//         return false;
//     } else {
//         return true;
//     }
// }
// const greaterThan10 = (n => n > 10);
// console.log(someRecursive([1,2,3], isOdd));
// console.log(someRecursive([1,21,3], greaterThan10));





//fn which accepts an array of arrays and return a new array with all values flattened

// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     } 
//     return newArr;
// }
// console.log(flatten([[1,2,3],[5,6],[8]]));
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));





//given an array of strings, capitalize the first letter of each string in the array

// function capitalize(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].substr(1);
//         //or
//         //arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
//     }
//     return arr;
// }

//using recursion

// function capitalizeFirst(arr1){
//     let array = [];
//     function capitalize(arr){
//         if(arr.length === 0){
//             return arr;
//         }
//         arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].substr(1);
//         array.push(arr[0]);
//         capitalize(arr.slice(1));
//         return array;
//     }
//     let capitalizedArray = capitalize(arr1);
//     return capitalizedArray;
// }

// console.log(capitalizeFirst(['first', 'second', 'third', 'fourth']));





//return the sum of all even no in an object which may contain nested objects

// function nestedEvenSum(obj, sum = 0){
//     for(let val in obj){
//         if(typeof obj[val] === 'number' && obj[val] % 2 === 0){
//             sum += obj[val];
//         } else if(typeof obj[val] === 'object'){
//             sum += nestedEvenSum(obj[val]);
//         }
//     }
//     return sum;
// }
// let obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
// }
// let obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
// }
// console.log(nestedEvenSum(obj1));
// console.log(nestedEvenSum(obj2));





//given an array of words return a new array containing each word capitalized

// function capitalizeWords(arr1){
//     let array = [];
//     function capitalize(arr){
//         if(arr.length === 0){
//             return arr;
//         }
//         arr[0] = arr[0].toUpperCase();
//         array.push(arr[0]);
//         capitalize(arr.slice(1));
//         return array;
//     }
//     let capitalizedArray = capitalize(arr1);
//     return capitalizedArray;
// }
// console.log(capitalizeWords(['first', 'second', 'third', 'fourth']));





//takes an obj and finds all the values which are no and converts them to strings

// function stringifyNumbers(obj){
//     let newObj = {};
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             newObj[key] = obj[key].toString();
//         } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
//             newObj[key] = stringifyNumbers(obj[key]);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// console.log(stringifyNumbers(obj1));





//accepts an obj and returns an array of all the values in the obj that have a typeof string

// function collectStrings(obj){
//     let arr = [];
//     for(let key in obj){
//         if(typeof obj[key] === 'string'){
//             arr.push(obj[key]);
//         } else if(typeof obj[key] === 'object'){
//             arr = arr.concat(collectStrings(obj[key]));
//         }
//     }
//     return arr;
// }

//using helper method

// function collectStrings(obj){
//     let arr = [];
//     function helperMethod(helperObj){
//         for(let key in helperObj){
//             if(typeof helperObj[key] === 'string'){
//                 arr.push(helperObj[key]);
//             } else if(typeof helperObj[key] === 'object'){
//                 return helperMethod(helperObj[key]);
//             }
//         }
//     }
//     helperMethod(obj);
//     return arr;
// }

// const obj1 = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(collectStrings(obj1));