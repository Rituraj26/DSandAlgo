//built in sort method in javascript

// while using no it first converts to unicode so sometimes unexpected results might come

// function sorting(num1, num2){
//     return num1 - num2;
// }
// console.log([2,4,1,8].sort(sorting));

//compare by length

// function compareByLen(str1, str2){
//     return str1.length - str2.length;
//     //for decending order return str2.length - str1.length;
// }
// console.log(['Steele', 'colt', 'data structures', 'Algorithms'].sort(compareByLen));





//Bubble Sorting

// const swap = (num1, num2) => {
//     let temp = 0;
//     temp = num1;
//     num1 = num2;
//     num2 = temp;
//     return [num1, num2];
// }
// const bubbleSort = arr => {
//     let noSwaps;
//     for(let i = 0 ; i < arr.length ; i++){
//         noSwaps = true;
//         for(let j = 0 ; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps){
//             break;
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([3,6,2,-6,0,22,-11]));





//Selection Sort

// const swap = (num1, num2) => {
//     let temp = 0;
//     temp = num1;
//     num1 = num2;
//     num2 = temp;
//     return [num1, num2];
// }
// const selectionSort = arr => {
//     for(let i = 0 ; i < arr.length ; i++){
//         let min = i;
//         for(let j = i + 1 ; j < arr.length ; j++){
//             if(arr[min] > arr[j]){
//                 min = j;
//             }
//         }
//         if(min !== i){
//             [arr[i], arr[min]] = swap(arr[i], arr[min]);
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([3,6,2,-6,0,22,-11]));





//Insertion Sort

// const insertionSort = arr => {
//     let temp; 
//     for(let i = 1; i < arr.length; i++){
//         temp = arr[i];
//         for(let j = i - 1; j >= 0; j--){
//             if(arr[j] > temp){
//                 arr[j + 1] = arr[j];
//                 if(j === 0){
//                     arr[j] = temp;
//                 }
//             } else {
//                 arr[j + 1] = temp;
//                 break;
//             }
//         }
//     }
//     return arr;
// }

//another method

// const insertionSort = arr => {
//     let temp; 
//     for(let i = 1; i < arr.length; i++){
//         temp = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > temp; j--){
//                 arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = temp; //var is not scope specific unlike let
//     }
//     return arr;
// }

// console.log(insertionSort([3,6,2,-6,0,22,-11]));
// console.log(insertionSort([2,1,9,76,4]));





//Merge Sort

// function merging(arr1, arr2){
//     let i = 0, j = 0, sorted = [];
//     while(i < arr1.length || j < arr2.length){
//         if(i === arr1.length){
//             sorted.push(arr2[j]);
//             j++;
//         } else if(j === arr2.length){
//             sorted.push(arr1[i]);
//             i++;
//         } else {
//             if(arr1[i] > arr2[j]){
//                 sorted.push(arr2[j]);
//                 j++;
//             } else if(arr1[i] < arr2[j]){
//                 sorted.push(arr1[i]);
//                 i++;
//             } else {
//                 sorted.push(arr1[i]);
//                 sorted.push(arr2[j]);
//                 i++;
//                 j++;
//             }
//         }
//     }
//     return sorted;
// }
// function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let leftArr = mergeSort(arr.slice(0, mid));
//     let rightArr = mergeSort(arr.slice(mid));
//     return merging(leftArr, rightArr);
// }
// console.log(mergeSort([7,3,7,0,-1,10]));

//another method

// function merging(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }
// function mergeSort(arr, l, r){
//     if(l === r){
//         let ar = [];
//         ar.push(arr[l]);
//         return ar;
//     }
//     let mid = Math.floor((l + r) / 2);
//     let leftArr = mergeSort(arr, l, mid);
//     let rightArr = mergeSort(arr, mid + 1, r);
//     return merging(leftArr, rightArr);
// }
// console.log(mergeSort([3,6,2,7,-6,22,-11,0], 0, 7));





//Quick Sort

//using hoare's partition scheme

// const partition = (arr, first, end) => {
//     let pivot = arr[first];
//     let i = first, j = end;
//     while(i < j){
//         while(arr[i] <= pivot){
//             i++;
//         }
//         while(arr[j] > pivot){
//             j--;
//         }
//         if(i < j){
//             swap(arr, i, j);
//         }
//     }
//     return j;
// }
// const swap = (arr, first, second) => {
//     let temp;
//     temp = arr[first];
//     arr[first] = arr[second];
//     arr[second] = temp;
//     return arr;
// }
// const quickSort = (arr, first, end) => {
//     if(first < end){
//         let part = partition(arr, first, end);
//         swap(arr, first, part);
//         quickSort(arr, first, part - 1);
//         quickSort(arr, part + 1, end);
//     }
//     return arr;
// }
// console.log(quickSort([4,-4,7,0,11,-22], 0, 5));





//Radix Sort (this is not comparision sort unlike other we have seen yet)

// const getDigit = (num, digit) => {
//     // num = Math.abs(num);
//     // let str = num.toString();
//     // return Math.floor(str[str.length - 1 - digit]); //needs to add 0 before no else error will come 002
//     // or
//     return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
// }
// const digitCount = num => {
//     num = Math.abs(num);
//     let str = num.toString();
//     return str.length;
//     // or 
//     // if(num === 0) return 1;
//     //      return Math.floor(Math.log10(Math.abs(num))) + 1;
// }
// const mostDigits = arr => {
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return digitCount(max);
// }
// const radixSort = arr => {
//     let mostDigit = mostDigits(arr);
//     for(let i = 0; i < mostDigit; i++){
//         let buckets = [[],[],[],[],[],[],[],[],[],[]];
//         for(let j = 0; j < arr.length; j++){
//             let digit = getDigit(arr[j], i);
//             buckets[digit].push(arr[j]);
//         }
//         arr = [].concat(...buckets);
//     }
//     return arr;
// }
// console.log(radixSort([655,367,27,91,2]));