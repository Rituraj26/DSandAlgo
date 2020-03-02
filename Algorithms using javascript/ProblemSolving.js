// function addUpTo(n){
//     let total = 0;
//     for(let i = 1; i <= n; i++){
//         total += i;
//     }
//     return total;
// }

// function addUpTo(n){
//     return n * (n+1) / 2;
// }

// const t1 = performance.now();
// addUpTo(1000000000);
// const t2 = performance.now();
// console.log(`Time Elapsed : ${(t2 - t1)} seconds`);


//PROBLEM SOLVING 

// function returnCharFromString(str) {
//     let charStr = {};
//     for(let i = 0; i < str.length; i++) {
//         let character = str[i].toLowerCase();
//         if(charStr[character] > 0){
//             charStr[character]++;
//         } else {
//             charStr[character] = 1;
//         }
//     }
//     return charStr;
// }
// console.log(returnCharFromString('HelloWorld'));

// function returnCharFromString(str) {
//     let charStr = {};
//     for(let character of str) {
//         if(checkString(character)){
//             let chara = character.toLowerCase();
//             charStr[chara] > 0 ? charStr[chara]++ : charStr[chara] = 1;
//         }

//     }
//     return charStr;
// }
// const checkString = (checkCharacter => {
//     const charCode = checkCharacter.charCodeAt(0);
//     if(!(charCode > 47 && charCode < 58) && !(charCode > 64 && charCode < 91) && !(charCode > 96 && charCode < 123)){
//         return false;
//     }
//     return true;
// });

// console.log(returnCharFromString('Hello WORLD hi!!!'));



//take two arrays and check whether for each element square pair is present on the second array

//when non repeating values are present

// function same(arr1, arr2 = [36, 25, 81, 49, 225]){
//     let count = 0;
//     if(arr1.length === arr2.length){
//         for(let i = 0; i < arr1.length; i++){
//             if(arr1[i] * arr1[i] === arr2[i]){
//                 count++;
//             } else {
//                 break;
//             }
//         }
//         if(count === 5){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(same([6, 5, 9, 7, 15], [36, 25, 81, 49, 225]));

//works for all values

// const same = (arr1, arr2 = [36, 25, 81, 49, 225]) => {
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for(let key of arr1){
//         frequencyCounter1[key] > 0 ? frequencyCounter1[key]++ : frequencyCounter1[key] = 1;
//     }
//     for(let key of arr2){
//         frequencyCounter2[key] > 0 ? frequencyCounter2[key]++ : frequencyCounter2[key] = 1;
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key * key in frequencyCounter2)){
//             return false;
//         } 
//         if(frequencyCounter2[key * key] !== frequencyCounter1[key]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(same([6, 9, 9, 7, 15], [36, 49, 81, 81, 225]));




//Anagram

// const anagram = ((arr1, arr2) => {
//     const obj1 = {}, obj2 = {};
//     for(let val of arr1){
//         obj1[val] > 0 ? obj1[val]++ : obj1[val] = 1;
//     }
//     for(let val of arr2){
//         obj2[val] > 0 ? obj2[val]++ : obj2[val] = 1;
//     }
//     for(let key in obj1){
//         if(!(key in obj2)){
//             return false;
//         }
//         if(obj1[key] !== obj2[key]){
//             return false;
//         }
//     }
//     return true;
// });
// const firstString = prompt("enter the first input string");
// const secondString = prompt("enter the second input string");
// console.log(anagram(firstString, secondString));

//anagram using one object

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }
//     const lookup = {};
//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)
//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }
//     return true;
//   }
//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm')



//Multiple pointers promblem

//find the first pair whose sum is zero

// function sumZero(arr){
//     let left = 0, sum = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         sum = arr[left] + arr[right];
//         if(sum === 0){
//             return [arr[left], arr[right]];
//         } else if(sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10]));

//count the no of unique values

// function countUniqueValues(arr){
//     let left = 0, right = 1, count = 0;
//     while(left !== arr.length){
//         if(arr[left] === arr[right]){
//             left++;
//             right++;
//         } else {
//             count++;
//             left++;
//             right++;
//         }
//     }
//     return count;
// }
// console.log(countUniqueValues([1,1,1,1,1,2]));
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2,-1,-1,0,1]));

// function countUniqueValues(arr){
//     let i = 0, j = 1;
//     if(arr.length === 0){
//         return 0;
//     }
//     while(j < arr.length){
//         if(arr[i] === arr[j]){
//             j++;
//         } else {
//             i++;
//             arr[i] = arr[j];
//             j++;
//         }
//     }
//     return i + 1;
// }
// console.log(countUniqueValues([1,1,1,1,1,2]));
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2,-1,-1,0,1]));




//accepts arr and no n. function should calculate the maximum sum of n consecutive elements of array

// function maxSubarraySum(arr, n){
//     let max = -Infinity;
//     if(arr.length === 0){
//         return null;
//     }
//     for(let i = 0; i < arr.length - n + 1; i++){
//         let sum = 0;
//         for(let j = i; j < i + n; j++){
//             sum = sum + arr[j];
//         }
//         if(max < sum){
//             max = sum;
//         }
//     }
//     return max;
// }
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
// console.log(maxSubarraySum([4,2,1,6,2], 4));
// console.log(maxSubarraySum([], 4));
// console.log(maxSubarraySum([4,2,1,6], 1));
// console.log(maxSubarraySum([-2,-4,-1,-8,-5], 3));
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));

//sliding method

// const maxSubarraySum = ((arr, n) => {
//     let max = 0, temp = 0;
//     if(arr.length < n){
//         return null;
//     }
//     for(let i = 0; i < n; i++){
//         max = max + arr[i];
//     }
//     temp = max;
//     for(let i = n; i < arr.length; i++){
//         temp = temp + arr[i] - arr[i - n];
//         if(temp > max){
//             max = temp;
//         }
//     }
//     return max;
// });
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
// console.log(maxSubarraySum([4,2,1,6,2], 4));
// console.log(maxSubarraySum([], 4));
// console.log(maxSubarraySum([4,2,1,6], 1));
// console.log(maxSubarraySum([-2,-4,-1,-8,-5], 3));
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));




//given two integer, find out if the two no have same frequency of digits

// function sameFrequency(n1, n2){
//     let obj1 = {}, arr1 = [], arr2 = [];
//     arr1 = convertToArray(n1);
//     arr2 = convertToArray(n2);
//     for(let val of arr1){
//         obj1[val] > 0 ? obj1[val]++ : obj1[val] = 1;
//     }
//     for(let i = 0; i < arr2.length; i++){
//         let letter = arr2[i];
//         if(!(obj1[letter])){
//             return false;
//         } else {
//             obj1[letter]--;
//         }
//     }
//     return true;
// }
// function convertToArray(n){
//     let arr = [], t = 0;
//     while(n > 0){
//         t = n % 10;
//         arr.push(t);
//         n = Math.floor(n / 10);
//     }
//     return arr;
// }

//another method

// function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;
//     let countNum1 = {};
//     let countNum2 = {};
//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }
//     for(let j = 0; j < strNum1.length; j++){
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }
//     for(let key in countNum1){
//       if(countNum1[key] !== countNum2[key]) return false;
//     }
//     return true;
// }

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));





//fn which accepts variable no of args check whether any duplicates present

//using frequency pointer method

// function areThereDuplicates(...arr){
//     const obj = {};
//     for(let val of arr){
//         if(obj[val] > 0){
//             return true;
//         } else {
//             obj[val] = 1;
//         }
//     }
//     return false;
// }

//using multiple pointer

// function areThereDuplicates(...arr){
//     arr.sort();
//     let left = 0, right = 1;
//     while(right < arr.length){
//         if(arr[left] === arr[right]){
//             return true;
//         } else {
//             left++;
//             right++;
//         }
//     }
//     return false;
// }

//one linear solution

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }

// console.log(areThereDuplicates('a','b','c','a'));
// console.log(areThereDuplicates(1,2,2));
// console.log(areThereDuplicates(1,2,3));




//determine if pair of values in the arr avg equals target average

// function averagePair(arr, num){
//     let start = 0
//     let end = arr.length-1;
//     while(start < end){
//         let avg = (arr[start] + arr[end]) / 2 
//         if(avg === num){
//             return true;
//         }
//         else if(avg < num){
//             start++;
//         }
//         else {
//             end--;
//         }
//     }
//     return false;
// }
// console.log(averagePair([1,2,3], 2.5));
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
// console.log(averagePair([-1,0,3,4,5,6], 4.1));
// console.log(averagePair([], 4));




//takes 2 strings and checks whether the char in first string appear in the 2nd string anywhere

// function isSubsequence(s1, s2){
//     let first = 0, second = 0;
//     if(!s1){
//         return true;
//     }
//     while(first < s1.length) {
//         if(second === s2.length){
//             return false;
//         }
//         if(s1[first] === s2[second]){
//             first++;
//         }
//         second++;
//     }
//     return true;
// }

//recursive soln

// function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true
//     if(str2.length === 0) return false
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//     return isSubsequence(str1, str2.slice(1))
// }

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));




//find the max sum of a subarray with the length passed to the fn

// function maxSubarraySum(arr, n){
//     let max = 0, temp = 0;
//     if(arr.length < n){
//         return null;
//     }
//     for(let i = 0; i < n; i++){
//         max += arr[i];
//     }
//     temp = max;
//     for(let i = n; i < arr.length; i++){
//         temp = temp + arr[i] - arr[i - n];
//         if(temp > max){
//             max = temp;
//         }
//     }
//     return max;
// }
// console.log(maxSubarraySum([100,200,300,400], 2));
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2));
// console.log(maxSubarraySum([2,3], 3));




//it should return the min length of subarray whose sum is greater than or equal to integer passed

// function minSubArrayLen(arr, n){
//     let size = 1, max = 0, temp = 0;
//     while(size <= arr.length){
//         for(let i = 0; i < size; i++){
//             max += arr[i];
//         }
//         if(max >= n){
//             return size;
//         }
//         temp = max;
//         for(let i = size; i < arr.length; i++){
//             temp = temp + arr[i] - arr[i - size];
//             if(temp >= n){
//                 return size;
//             }
//         }
//         size++;
//         max = 0;
//     }
//     return 0;
// }

//another solution

// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;
//     while (start < nums.length) {
//         if(total < sum && end < nums.length){
//             total += nums[end];
//                 end++;
//         }
//         else if(total >= sum){
//             minLen = Math.min(minLen, end-start);
//                 total -= nums[start];
//                 start++;
//         }
//         else {
//             break;
//         }
//     }
//     return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubArrayLen([2,3,1,2,4,3], 7));
// console.log(minSubArrayLen([2,1,6,5,4], 9));
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));