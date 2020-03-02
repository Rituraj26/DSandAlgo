//Linear Search

// const linearSearch = ((arr, val) => {
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] === val){
//             return i;
//         }
//     }
//     return -1;
// });
// console.log(linearSearch([3,6,7,2,1,0], 2));





//Binary Search

// const binarySearch = ((arr, val) => {
//     let mid = 0, left = 0, end = arr.length - 1;
//     while(left <= end){
//         mid = Math.floor((left + end) / 2);
//         if(val === arr[mid]){
//             return mid;
//         } else if(val > arr[mid]){
//             left = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return -1;
// });
// console.log(binarySearch([1,3,5,6,7,8,9], 8));
// console.log(binarySearch([1,2,3,4,5], 2));





//Naive String Search

// const naiveStringSearch = (str1, str2) => {
//     let count = 0;
//     for(let i = 0 ; i < str1.length ; i++){
//         for(let j = 0 ; j < str2.length ; j++){
//             if(str1[i + j] !== str2[j]){
//                 break;
//             }
//             if(j === str2.length - 1){
//                 count++;
//             }
//         }
//     }
//     return count;
// }

//using multiple pointer method

// const naiveStringSearch = (str1, str2) => {
//     let i = 0, j = 0, count = 0;
//     for(let index = 0 ; index < str1.length ; index++){
//         if(str1[i] === str2[j]){
//             i++;
//             j++;
//         } else {
//             i++;
//             j = 0;
//         }
//         if(j === str2.length){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(naiveStringSearch("awesomegameomeoe", "ome"));
// console.log(naiveStringSearch("lorie loled", "pop"));